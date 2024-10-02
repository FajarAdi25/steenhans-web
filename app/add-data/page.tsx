import { Breadcrumbs } from '@/components/breadcrumbs';
import { FileForm } from '@/components/forms/slider-form';
import { ProductForm } from '@/components/forms/product-form';
import PageContainer from '@/components/layout/page-container';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const breadcrumbItems = [{ title: 'Add Data', link: '/add-data' }];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <p>This is add page</p>
      </div>
    </PageContainer>
  );
}
