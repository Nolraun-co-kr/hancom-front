import React from 'react';
import Link from 'next/link';

export default function EnterPriceTop() {
  return (
    <div className="content">
      <div className="wrap">
        <div className="bluecontent small">
          <div className="txtBox">
            <h2>ENTERPRISE</h2>
            <p>
              ENTERPRISE 계정으로 Upgrade 를 원하시는
              <br />
              고객님께서는 아래 문의하기 버튼을 눌러 주세요
            </p>
            <Link href={'/inquiry'}>
              <a>문의하기</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
