import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { ProductCategoryClient } from '@/components/tables/product-category-table/product-category-table';
import { productCategory, slider } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Product', link: '/product' },
  { title: 'Product Category', link: '/product/product-category' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductCategoryClient data={productCategory} />
      </div>
    </PageContainer>
  );
}
