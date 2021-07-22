import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUsecaseRequest } from '../../redux/actions/usecase';

export default function UseCaseInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { usecaseDetail } = useSelector(state => state.usecase);

  const {
    query: { id },
  } = router;
  useEffect(() => {
    if (id) {
      dispatch(
        getOneUsecaseRequest({
          id,
        }),
      );
    }
  }, [id]);

  return (
    <>
      <div className="post__top">
        <div className="post__title">
          <h3>
            블로그 제목 영역 입니다.블로그 제목 영역 입니다.블로그 제목 영역 입니다.블로그 제목 영역
            입니다.
          </h3>
          <div className="userInfo">
            <div className="thumb">
              <img src="/images/user.png" alt="" />
            </div>
            <span className="userName">hancomkim_1234</span>
            <span className="date">2021. 05. 12</span>
          </div>
        </div>
      </div>
      <div className="post__bottom">
        <div className="imgarea">
          <div className="img">
            <img src="/images/post-1.png" alt="" />
          </div>
          <div className="info">
            <div className="col">
              <p>Industry</p>
              <h4>Software</h4>
            </div>
            <div className="col">
              <p>Purpose</p>
              <h4>Contract</h4>
            </div>
            <div className="col">
              <p>Company Size</p>
              <h4>400+</h4>
            </div>
          </div>
        </div>
        <div className="txtarea">
          Rakuten is the largest eCommerce company in Japan, and the third-largest eCommerce
          marketplace company worldwide. Rakuten Super Logistics is the complete supply chain
          solution for eCommerce retailers, from dock to doorstep. Its eCommerce fulfillment
          services include full-service freight management, multichannel order fulfillment, and
          return management for online orders.
          <strong>The Problem </strong>
          In 2015, the Rakuten Super Logistics sales team was relying on a whole host of tools just
          to complete the simple action of creating a document. It was tedious, time-consuming, and
          provided a less-than-streamlined customer experience. Their situation was not unlike that
          of other teams we’ve seen before they’ve discovered PandaDoc. There were a lot of
          Microsoft Documents involved, a lot of repetitive data entry, and a few human errors on
          Rakuten Super Logistics’s end. On the customer’s end, the process of proofing the docs
          they were sent, getting any changes resolved, printing, signing, and scanning or mailing
          them back was a hassle. Director of Sales, Jonathan Grospe knew there was room for
          improvement within his team’s processes. Aside from the issues experienced by the Rakuten
          Super Logistics sales team, other departments within org were struggling with their own
          document workflows. The Customer Success team had started its expansion and was looking
          for a simpler, more effective way to send documents and information to new hires. The team
          overseeing customer warehouse visits was looking for the same thing when it came to
          sending out liability waivers and NDAs to guests.
        </div>
      </div>
    </>
  );
}
