import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileGnb from '../components/MobileGnb';
import styled from 'styled-components';

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showDepthNav, setSHowDepthNav] = useState(null);

  const mouseEnterEvent = number => {
    setSHowDepthNav(number);
  };
  const mouseLeaveEvent = () => {
    setSHowDepthNav(null);
  };

  useEffect(() => {
    window &&
      window.addEventListener('scroll', () => {
        mouseLeaveEvent();
      });
  }, []);

  return (
    <>
      <HeaderLayout className={showDepthNav !== null ? 'hasdepth': ''}>
        <div className="wrap">
          <button className="m-header__menu" onClick={() => setShowNav(!showNav)}>
            <img src="/images/menu.png" alt="" />
          </button>
          <h1 className="header__logo">
            <Link href={'/'}>
              <a>
                <img src="/images/logo.png" alt="" />
              </a>
            </Link>
          </h1>

          <nav className="header__nav">
            <div className="nav__item" onMouseEnter={() => mouseEnterEvent(1)}>
              <Link href={'/product'}>
                <a className="nav__link">제품 소개</a>
              </Link>
              {showDepthNav === 1 && (
                <div className="nav__depth" onMouseLeave={mouseLeaveEvent}>
                  <Link href={'/product'}>
                    <a href="">제품 소개</a>
                  </Link>
                  <Link href={'/reference'}>
                    <a href="">자료실</a>
                  </Link>
                </div>
              )}
            </div>
            <div className="nav__item" onMouseEnter={() => mouseEnterEvent(2)}>
              <Link href={'/usecase'}>
                <a className="nav__link">고객사 안내</a>
              </Link>
              {showDepthNav === 2 && (
                <div className="nav__depth" onMouseLeave={mouseLeaveEvent}>
                  <Link href={'/usecase'}>
                    <a href="">활용사례</a>
                  </Link>
                </div>
              )}
            </div>
            <div className="nav__item" onMouseEnter={() => mouseEnterEvent(null)}>
              <Link href={'/price'}>
                <a className="nav__link na">가격 안내</a>
              </Link>
            </div>
            <div className="nav__item" onMouseEnter={() => mouseEnterEvent(4)}>
              <Link href={'/secure'}>
                <a className="nav__link">보안 & 법률정보</a>
              </Link>
              {showDepthNav === 4 && (
                <div className="nav__depth" onMouseLeave={mouseLeaveEvent}>
                  <Link href={'/secure'}>
                    <a href="">보안 & 법률정보</a>
                  </Link>
                  <Link href={'/certification'}>
                    <a href="">본인 인증</a>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <div className="header__etc">
            <a href="">로그인</a>
            <a href="">디자인 체험하기</a>
          </div>
        </div>
      </HeaderLayout>

      {showNav && <MobileGnb />}
    </>
  );
}

const HeaderLayout = styled.header`
  border-bottom: 1px solid #d7dadb;
  background: #fff;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 3000;
  
  &.hasdepth {
    &:after {
      content: '';
      position: fixed;
      left: 0;
      top: 66px;
      width: 100%;
      height: 48px;
      background:#fff;
      border-bottom: 1px solid #d7dadb;
    }
  }
  
  .wrap {
    height: 65px;
    display: flex;
    align-items: center;
  }
  
  .header__logo {
    margin-right: 125px;
    display: flex;
    @media screen and (max-width: 768px) {
      height: 30px;
      img {
        height: 100%;
      }
    }
  }

  .header__nav {
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .nav__item {
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding:0 4px;
    & ~ .nav__item {
      margin-left: 48px;
    }
    &:hover {
      &::after {
        content: '';
        width: 110%;
        height: 2px;
        background: #4c73d5;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
      
      & > a {
        color:#4C73D5;
        font-weight: 700;
      }
    }
    .nav__link {
      font-size: 16px;
      color: #333;
    }
  }
  
  .nav__depth {
    position: absolute;
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 66px;
    height: 48px;
    a {
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      & ~ a {
        margin-left: 24px;
      }
      &:hover {
        border-bottom: 1px solid #333;
      }
    }
  }

  .header__etc {
    display: flex;
    align-items: center;
    margin-left: auto;
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

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .m-header__menu {
    display: none;
    margin-right: 9px;
    @media screen and (max-width: 1024px) {
      display: block;
    }
  }
`;
