import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {useRouter} from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <FooterLayout>
      <div className="wrap">
        <div className="footer__corp">
          <div className="corp__list">
            <Link href={'/private'} >
              <a className={router.route === '/private' ? 'active' : ''}>이용약관</a>
            </Link>
            <Link href={'/private'}>
              <a>개인정보처리방침</a>
            </Link>
            <Link href={'/private'}>
              <a>전자거래금융이용약관</a>
            </Link>
          </div>
          <div className="addr">
            <p>경기도 성남시 분당구 대왕판교로 644 번길 49 한컴타워 10 층</p>
            <p>
              사업자등록번호 107 -81 -52230 통신판매신고번호 2012 -경기성남 -1092 (주)한글과컴퓨터
              대표자 : 변성준
            </p>
            <p>Copyrights © Hancom Inc. All rights reserved. Copyrights</p>
          </div>
        </div>

        <div className="footer__relation">
          <select name="" id="">
            <option value="">Family Site</option>
          </select>
        </div>
      </div>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  background: #313131;
  .wrap {
    padding: 55px 10px;
    display: flex;
    @media screen and (max-width: 768px) {
      padding: 30px 20px;
      flex-direction: column;
    }
  }
  .footer__corp {
    .corp__list {
      margin-bottom: 15px;
      a {
        font-size: 14px;
        color: #fff;
        font-weight: 300;
        & ~ a {
          margin-left: 20px;
        }
        &.active {
          font-weight: 900;
        }
      }
    }
    .addr {
      p {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        line-height: 1.6em;
        &:last-child {
          margin-top: 10px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      order: 2;
      .corp__list {
        a {
          font-size: 13px;
        }
      }
      .addr {
        p {
          font-size: 11px;
        }
      }
    }
  }

  .footer__relation {
    margin-left: auto;
    width: 200px;
    height: 30px;
    select {
      width: 100%;
      height: 100%;
      background: rgba(204, 204, 204, 0.2) url(../images/plus.png) no-repeat calc(100% - 8px) center;
      padding: 0 8px;
      color: #fff;
      font-size: 14px;
    }

    @media screen and (max-width: 768px) {
      order: 1;
      margin-bottom: 20px;
    }
  }
`;
