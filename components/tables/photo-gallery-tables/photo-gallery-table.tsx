'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { PhotoGallery, Slider } from '@/constants/data';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { columns } from './columns';
import { cn } from '@/lib/utils';

interface PhotoGalleryProps {
  data: PhotoGallery[];
}

export const PhotoGalleryClient: React.FC<PhotoGalleryProps> = ({ data }) => {
  const router = useRouter();

  // console.log(data);

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Photo Gallery (${data.length})`}
          description="Manage Photo Gallery (Client side table functionalities.)"
        />
        <Button
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'text-xs md:text-sm'
          )}
          onClick={() => router.push(`/photo-gallery/create`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="" columns={columns} data={data} />
    </>
  );
};
