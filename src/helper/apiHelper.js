import Cookie from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import queryString from 'query-string';
import { Router } from '../i18n';
import config from '../config';

export const invokeApi = ({ path, method, accessToken, data, isServer }) => {
  const ip = Cookie.get('client_ip');

  let stringified = '';
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };

  const dataManified = Object.assign({}, data, {
    client: 'web',
    ip_address: ip,
  });

  if (method === 'GET') {
    stringified = queryString.stringify(dataManified, {
      arrayFormat: 'bracket',
    });
  } else {
    options.body = JSON.stringify(dataManified);
  }

  const host = config.RABBIT_HOST;

  return fetch(`${host}${path}?${stringified}`, options)
    .then(res => res.json())
    .then(resp => {
      // 400003 || 401001 expired
      // others: unknown
      if (
        resp.error ||
        (resp.error_code &&
          (resp.error_code === 4000 ||
            resp.error_code === 4001 ||
            resp.error_code === 400002 ||
            resp.error_code === 404201 ||
            resp.error_code === 400003 ||
            resp.error_code === 401001))
      ) {
        if (isServer) {
          return { error_code: resp.error_code || resp.error };
        }
        Router.push('/auth/hancom');
      }
      return resp;
    })
    .catch(err => {
      console.log(err);
    });
};

export default invokeApi;
