import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneReferenceRequest } from '../../redux/actions/reference';
import { useRouter } from 'next/router';

export default function ReferenceInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { referenceDetail } = useSelector(state => state.reference);

  const {
    query: { id },
  } = router;
  useEffect(() => {
    if (id) {
      dispatch(
        getOneReferenceRequest({
          id,
        }),
      );
    }
  }, [id]);
  return (
    <div className="referencedetail">
      <div className="detail__top">
        <div className="wrap">
          <div className="img">
            <img src="/images/detail-img.png" alt="" />
          </div>
          <div className="info">
            <div className="title">
              <span>거래 (물건/금전)</span>
              <h3>거래약정서 : 2021년 개정판</h3>
            </div>

            <div className="form">
              <form action="">
                <div className="form__row">
                  <div className="form__tit">
                    이메일 주소 <span>*</span>
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="이메일 주소를 입력해 주세요" />
                  </div>
                </div>
                <div className="form__row mb-0">
                  <div className="form__tit">
                    전화번호 <span>*</span>
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder="- 없이 입력해 주세요" />
                  </div>
                </div>
                <div className="form__row">
                  <label htmlFor="agree" className="checkbox">
                    <input type="checkbox" hidden="" id="agree" />
                    <span />
                    <p>한컴OK싸인의 새로운 소식 및 마케팅/홍보자료 수신에 동의합니다.</p>
                  </label>
                </div>
                <a href="" className="usebtn">
                  사용 하기
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="detail__bottom">
        <div className="wrap">
          <h3>[계약서 해설 요약]</h3>
          <p>
            사용자는 근로계약 기간의 정함이 없는 근로자를 채용할 경우 근로기준법 제 17조에 따라
            정규직근로계약서를 작성하고 근로자에게 1부를 반드시 교부하여야 합니다.
          </p>
          <p>
            정규직근로계약서에는 근로기준법 제 17조에서 반드시 명시해야하는 근로조건의 내용, 이외에
            수습시간, 비밀유지의무, 근로계약 해지사유 등 회사에서 필요한 사항들을 노무법인의 검수를
            통해 포함하였습니다
          </p>
        </div>
      </div>
    </div>
  );
}
