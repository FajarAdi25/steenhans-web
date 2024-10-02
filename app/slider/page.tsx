import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { SliderClient } from '@/components/tables/slider-tables/slider-table';
import { slider } from '@/constants/data';

const breadcrumbItems = [{ title: 'Slider', link: '/slider' }];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <SliderClient data={slider} />
      </div>
    </PageContainer>
  );
}
