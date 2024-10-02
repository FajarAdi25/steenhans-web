'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Product, Slider } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import Image from 'next/image';

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'photo',
    header: 'PHOTO',
    cell: ({ row }) => (
      <Image
        src={row.original.photo}
        alt={`Photo of ${row.original.photo}`}
        width={50}
        height={50}
      />
    )
  },
  {
    accessorKey: 'file_status',
    header: 'FILE STATUS',
    cell: ({ row }) => (
      <div>
        {row.original.file_status.map(
          (item: { id: number; url_file: string }) => (
            <p key={item.id}>
              <a href={item.url_file} target="_blank" rel="noopener noreferrer">
                {item.url_file}
              </a>
            </p>
          )
        )}
      </div>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
