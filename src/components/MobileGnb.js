import React, { useCallback, useState } from 'react';
import Link from 'next/link';

export default function MobileGnb() {
  const [toggleIndex, setToggleIndex] = useState(null);

  const onClickSetToggleIndex = useCallback(idx => {
    if (idx === toggleIndex) {
      setToggleIndex(null);
    } else {
      setToggleIndex(idx);
    }
  }, []);
  return (
    <div className="m-navWrap">
      <div className="header__etc">
        <div className="wrap">
          <a href="">로그인</a>
          <a href="">디자인 체험하기</a>
        </div>
      </div>

      <nav className="m-nav">
        <h2 className="title">Menu</h2>
        <div className={`m-nav__item ${toggleIndex === 1 && 'active'}`}>
          <a href="#//" className="m-nav__link" onClick={() => onClickSetToggleIndex(1)}>
            제품소개
          </a>
          {toggleIndex === 1 && (
            <div className="m-nav__depth">
              <Link href={'/product'}>
                <a>제품소개</a>
              </Link>
              <Link href={'/reference'}>
                <a>자료실</a>
              </Link>
            </div>
          )}
        </div>
        <div className={`m-nav__item ${toggleIndex === 2 && 'active'}`}>
          <a href="#//" className="m-nav__link" onClick={() => onClickSetToggleIndex(2)}>
            고객사 안내
          </a>
          {toggleIndex === 2 && (
            <div className="m-nav__depth">
              <Link href={'/usecase'}>
                <a>활용사례</a>
              </Link>
            </div>
          )}
        </div>
        <div className={`m-nav__item`}>
          <Link href={'/price'}>
            <a className="m-nav__link">가격 안내</a>
          </Link>
        </div>
        <div className={`m-nav__item ${toggleIndex === 3 && 'active'}`}>
          <a href="#//" className="m-nav__link" onClick={() => onClickSetToggleIndex(3)}>
            보안 & 법률정보
          </a>
          {toggleIndex === 3 && (
            <div className="m-nav__depth">
              <Link href={'/secure'}>
                <a>보안 & 법률정보</a>
              </Link>
              <Link href={'/certification'}>
                <a>본인 인증</a>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
