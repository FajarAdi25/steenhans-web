import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [{ title: 'Settings', link: '/settings' }];
export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <p>This is page setting</p>
        {/* <CreateProfileOne categories={[]} initialData={null} /> */}
      </div>
    </PageContainer>
  );
}
