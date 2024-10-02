'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { PhotoGallery, Slider } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import Image from 'next/image';

export const columns: ColumnDef<PhotoGallery>[] = [
  {
    id: 'select',

    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'sl',
    header: 'SL'
  },
  {
    accessorKey: 'photo',
    header: 'PHOTO',
    cell: ({ row }) => (
      <Image
        src={row.original.photo}
        alt={`Photo of ${row.original.sl}`}
        width={50}
        height={50}
      />
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
