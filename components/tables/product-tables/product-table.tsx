'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Product, Slider } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { cn } from '@/lib/utils';

interface ProductClientProps {
  data: Product[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();

  // console.log(data);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Product (${data.length})`}
          description="Manage product (Client side table functionalities.)"
        />
        <Button
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'text-xs md:text-sm'
          )}
          onClick={() => router.push(`/product/create`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
