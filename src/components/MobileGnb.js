import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export default function MobileGnb() {
  const [toggleIndex, setToggleIndex] = useState(null);

  const onClickSetToggleIndex = useCallback(idx => {
    if (idx === toggleIndex) {
      setToggleIndex(null);
    } else {
      setToggleIndex(idx);
    }
  }, [toggleIndex]);
  return (
    <MobileGnbLayout>
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
            <a className="m-nav__link na">가격 안내</a>
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
    </MobileGnbLayout>
  );
}

const MobileGnbLayout = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #fff;
  display: none;
  left: 0;
  top: 66px;
  z-index: 7000;
  @media screen and (max-width: 1024px) {
    display: block;

    .header__etc {
      display: flex;
      padding: 30px 0;
      border-bottom: 1px solid #e1e1e1;
      .wrap {
        display: flex;
      }
      a {
        font-size: 12px;
        color: #999;
        height: 30px;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        line-height: 30px;
        padding: 0 15px;
        background: #fff;
        transition: all .3s;
        &:first-child {
          &:hover {
            background: #F3F3F3;
          }
        }
        &:last-child {
          margin-left: 12px;
          background: #4679f6;
          color: #fff;
          border: 1px solid #4679f6;
          &:hover {
            background: #90affa;
            border: 1px solid #90affa;
          }
        }
      }
    }
  }

  .m-nav {
    margin-top: 45px;
    .title {
      font-size: 16px;
      color: #999;
      padding: 0 25px;
      margin-bottom: 15px;
    }
  }
  .m-nav__item {
    &.active {
      background: #f8f9fa;
      .m-nav__link {
        background: url('../images/arrow_up.png') no-repeat calc(100% - 25px) center;
      }
    }
  }
  .m-nav__link {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 25px;
    font-size: 16px;
    color: #333;
    background: url('../images/arrow_down.png') no-repeat calc(100% - 25px) center;
    &.na {
      background: none !important;
    }
  }
  .m-nav__depth {
    a {
      display: flex;
      height: 55px;
      align-items: center;
      padding: 0 45px;
      font-size: 14px;
      color: #666;
    }
  }
`;
