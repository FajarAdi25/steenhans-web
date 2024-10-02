import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { ProductClient } from '@/components/tables/product-tables/product-table';
import { product } from '@/constants/data';

const breadcrumbItems = [{ title: 'Product', link: '/product' }];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductClient data={product} />
      </div>
    </PageContainer>
  );
}
