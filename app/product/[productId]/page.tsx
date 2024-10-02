import { Breadcrumbs } from '@/components/breadcrumbs';
import { FileForm } from '@/components/forms/slider-form';
import { ProductForm } from '@/components/forms/product-form';
import PageContainer from '@/components/layout/page-container';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [
  { title: 'Product', link: '/product' }
  // { title: 'Create Slider', link: '/slider/create' }
  // { title: 'Edit Slider', link: '/slider/' }
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <FileForm
          positions={[
            { _id: '1', name: 'Frontend' },
            { _id: '2', name: 'Backend' },
            { _id: '3', name: 'DevOps' },
            { _id: '4', name: 'Engineer' }
          ]}
          languages={[
            { _id: '1', name: 'English' },
            { _id: '2', name: 'Indonesia' },
            { _id: '3', name: 'Germany' }
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </PageContainer>
  );
}
