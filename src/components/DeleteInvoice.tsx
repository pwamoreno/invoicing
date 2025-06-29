"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { deleteInvoiceAction } from "@/app/actions";
import { Ellipsis, Trash2 } from "lucide-react";

interface Props {
  invoiceId: number;
}

export function DeleteInvoice({ invoiceId }: Props) {
  const handleInvoiceDelete = (invoiceId: number) => {
    deleteInvoiceAction(invoiceId); // type as needed
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2" variant="outline">
          <span className="sr-only">More Options</span>
          <Ellipsis className="w-4 h-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => handleInvoiceDelete(invoiceId)}
        >
          <Trash2 className="w-4 h-auto" />
          Delete Invoice
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
