import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { PhotoGalleryClient } from '@/components/tables/photo-gallery-tables/photo-gallery-table';
import { slider } from '@/constants/data';

const breadcrumbItems = [{ title: 'Photo Gallery', link: '/photo-gallery' }];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <PhotoGalleryClient data={slider} />
      </div>
    </PageContainer>
  );
}
