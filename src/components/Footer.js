import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__corp">
          <div className="corp__list">
            <Link href={'/private'}>
              <a>이용약관</a>
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
    </footer>
  );
}
