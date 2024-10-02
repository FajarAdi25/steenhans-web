import { Breadcrumbs } from '@/components/breadcrumbs';
import { FileForm } from '@/components/forms/slider-form';
import { ProductForm } from '@/components/forms/product-form';
import PageContainer from '@/components/layout/page-container';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import { PhotoGallery } from '@/components/forms/photo-gallery-form';

const breadcrumbItems = [
  { title: 'Photo Gallery', link: '/photo-gallery' }
  // { title: 'Create Slider', link: '/slider/create' }
  // { title: 'Edit Slider', link: '/slider/' }
];
export default function Page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <PhotoGallery initialData={null} key={null} />
      </div>
    </PageContainer>
  );
}
