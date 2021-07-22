import React from 'react';
import Link from 'next/link';

export default function ReferenceItem({ data }) {
  return (
    <li>
      <div className="referenceitem">
        <div className="img">
          <img src="/images/reference_dummy.png" alt="" />
        </div>
        <div className="txt">
          <h4>{data?.title}</h4>
          <p>{data?.desc}</p>
          <Link href={'/reference/1'}>
            <a>자세히보기</a>
          </Link>
        </div>
      </div>
    </li>
  );
}
