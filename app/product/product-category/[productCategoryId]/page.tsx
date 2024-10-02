import { Breadcrumbs } from '@/components/breadcrumbs';
import { FileForm } from '@/components/forms/slider-form';
import { ProductForm } from '@/components/forms/product-form';
import PageContainer from '@/components/layout/page-container';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import { ProductCategoryForm } from '@/components/forms/product-category-form';

const breadcrumbItems = [
  { title: 'Product', link: '/product' },
  { title: 'Product Category', link: '/product/product-category' }
  // { title: 'Edit Slider', link: '/slider/' }
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductCategoryForm
          statusList={[
            { _id: '1', status: 'Active' },
            { _id: '2', status: 'Inactive' }
          ]}
          languages={[
            { _id: '1', language: 'English' },
            { _id: '2', language: 'Indonesia' },
            { _id: '3', language: 'Germany' }
          ]}
          initialData={null}
          key={null}
        />
      </div>
    </PageContainer>
  );
}
