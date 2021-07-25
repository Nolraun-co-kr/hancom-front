import React, { useState } from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import ReferenceList from '../../containers/reference/ReferenceList';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Visual from '../../components/common/Visual';

export default function Reference() {
  const router = useRouter();
  const [tab, setTab] = useState('t1');
  const handleClickTab = category => {
    router.push({
      pathname: '/reference',
      query: { category },
    });
    setTab(category);
  };
  return (
    <WrapperLayout>
      <Container>
        <div className="container sub product product--reference">
          <Visual
            title={'자료실'}
            description={'검증된 양식 문서를 사용 하여 전자서명을 진행하세요.'}
          />
          <div className="reference">
            <div className="wrap">
              <div className="category">
                <div className="tit">Category</div>
                <ul>
                  <li>
                    <button
                      className={tab === 't1' ? 'active' : ''}
                      onClick={() => handleClickTab('t1')}
                    >
                      거래 (물건/금전)
                    </button>
                  </li>
                  <li>
                    <button
                      className={tab === 't2' ? 'active' : ''}
                      onClick={() => handleClickTab('t2')}
                    >
                      취업/고용
                    </button>
                  </li>
                  <li>
                    <button
                      className={tab === 't3' ? 'active' : ''}
                      onClick={() => handleClickTab('t3')}
                    >
                      회사운영
                    </button>
                  </li>
                  <li>
                    <button
                      className={tab === 't4' ? 'active' : ''}
                      onClick={() => handleClickTab('t4')}
                    >
                      부동산 거래
                    </button>
                  </li>
                  <li>
                    <button
                      className={tab === 't5' ? 'active' : ''}
                      onClick={() => handleClickTab('t5')}
                    >
                      세무/회계
                    </button>
                  </li>
                  <li>
                    <button
                      className={tab === 't6' ? 'active' : ''}
                      onClick={() => handleClickTab('t6')}
                    >
                      하청/용역
                    </button>
                  </li>
                  <li>
                    <button
                      className={tab === 't7' ? 'active' : ''}
                      onClick={() => handleClickTab('t7')}
                    >
                      투자/주식
                    </button>
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="breadcrumb">
                  <a href="">HOME</a>
                  <a href="">제품소개</a>
                  <a href="">자료실</a>
                </div>
                <div className="reference__title">
                  <h3>거래 (물건/금전)</h3>
                  <p>한컴에서 제공하는 차별화된 제품들을 한컴OK싸인 기능으로 만나볼 수 있습니다.</p>
                </div>
                <ReferenceList category={tab || 't1'} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </WrapperLayout>
  );
}

const Container = styled.div`
  .reference {
    padding: 50px 0 100px;
    @media screen and (max-width: 1200px) {
      padding: 50px 0;
    }
    .wrap {
      display: flex;
      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
    }
    .category {
      width: 212px;
      margin-right: 44px;
      flex: none;
      .tit {
        font-size: 14px;
        color: #999;
        margin-bottom: 8px;
        padding-left: 24px;
      }
      ul {
        button {
          width: 100%;
          height: 48px;
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #333;
          padding-left: 24px;
          background: url('../images/arrow_right.png') no-repeat calc(100% - 8px) center #fff;
          &.active {
            background: url('../images/arrow_right.png') no-repeat calc(100% - 8px) center
              rgba(159, 159, 159, 0.1);
          }
        }
      }
      @media screen and (max-width: 1200px) {
        width: 100%;
        margin-right: 0;
        flex: 1;
        margin-bottom: 50px;
        .tit {
          display: none;
        }
        ul {
          // display: table;
          // table-layout: fixed;
          // width:100%;
          // &::after {
          //   content:'';
          //   clear: both;
          //   display: block;
          // }
          display: flex;
          flex-wrap: wrap;
          li {
            width: 50%;
            border: 1px solid #ccc;
            // display: table-cell;
            height: 43px;
            // float: left;
            // border-collapse:collapse;
            margin-left: -1px;
            margin-top: -1px;
          }
          a {
            width: 100%;
            height: 100%;
            padding-left: 0;
            background: none;
            font-size: 13px;
            justify-content: center;
            &.active {
              background-image: none;
            }
          }
        }
      }
    }
    .reference__title {
      margin-bottom: 50px;
      h3 {
        font-size: 32px;
        color: #333;
        margin-bottom: 6px;
      }
      p {
        font-size: 15px;
        color: #666;
      }
      @media screen and (max-width: 1024px) {
        margin-bottom: 24px;
        h3 {
          font-size: 20px;
          margin-bottom: 12px;
        }
        p {
          font-size: 13px;
          color: #888;
        }
      }
    }
  }
  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    a {
      font-size: 14px;
      color: #999;
      padding-right: 18px;
      margin-right: 8px;
      background: url('../images/arrow_right-small.png') no-repeat right center;
      &:last-child {
        background: none;
      }
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
