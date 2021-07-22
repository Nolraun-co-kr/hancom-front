import React from 'react';
import Link from 'next/link';

export default function UseCaseItem() {
  return (
    <li>
      <div className="inner">
        <div className="img">
          <img src="/images/customer-dummy.png" alt="" />
        </div>
        <div className="txt">
          <p>한컴OK싸인한컴OK싸인한컴OK싸인한컴OK싸인한컴OK싸인한컴OK싸인</p>
          <h3>
            이렇게 활용해 보세요.이렇게 활용해 보세요.이렇게 활용해 보세요.이렇게 활용해 보세요
          </h3>
          <Link href={'/usecase/1'}>
            <a>자세히보기</a>
          </Link>
        </div>
      </div>
    </li>
  );
}
