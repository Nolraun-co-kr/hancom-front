import React from 'react';
import WrapperLayout from '@/components/WrapperLayout';
import FootLink from '@/components/common/FootLink';
import ReferenceInfo from '../../containers/reference/ReferenceInfo';
import { useRouter } from 'next/router';
export default function ReferenceDetail() {
  return (
    <WrapperLayout>
      <div className="container sub product product--reference">
        <ReferenceInfo />
        <FootLink />
      </div>
    </WrapperLayout>
  );
}
