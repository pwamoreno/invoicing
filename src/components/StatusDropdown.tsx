'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { updateStatusAction } from '@/app/actions';
import { Status } from '@/db/schema';
import { ChevronDown } from 'lucide-react';

interface Props {
  invoiceId: number;
  currentStatus: string;
  statuses: { id: string; label: string }[];
}

export function StatusDropdown({ invoiceId, currentStatus, statuses }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (status: string) => {
    if (status === currentStatus) return;
    startTransition(() => {
      updateStatusAction(invoiceId, status as Status); // type as needed
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='flex items-center gap-2' variant="outline" disabled={isPending}>
          {isPending ? 'Updating...' : 'Change Status'}
          <ChevronDown className='w-4 h-auto'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {statuses.map((status) => (
          <DropdownMenuItem
            key={status.id}
            onClick={() => handleStatusChange(status.id)}
            disabled={status.id === currentStatus}
          >
            {status.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
