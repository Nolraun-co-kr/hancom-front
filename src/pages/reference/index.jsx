import React, { useState } from 'react';
import WrapperLayout from '../../components/WrapperLayout';
import ReferenceList from '../../containers/reference/ReferenceList';
import { useRouter } from 'next/router';

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
      <div className="container sub product product--reference">
        <div className="visual m-type1">
          <div className="txtBox">
            <h2>자료실</h2>
            <p>검증된 양식 문서를 사용 하여 전자서명을 진행하세요.</p>
          </div>
        </div>
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
    </WrapperLayout>
  );
}
