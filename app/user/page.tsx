import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { UserClient } from '@/components/tables/user-tables/client';
import { users } from '@/constants/data';

const breadcrumbItems = [
  { title: 'User', link: '/user' },
  { title: 'All Users', link: '/user/all-users' }
];
export default function page() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </PageContainer>
  );
}
