import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Invoices</h1>
        <p>
            <Button variant="ghost">
                Create Invoice
            </Button>
        </p>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] P-4">
                Date
            </TableHead>
            <TableHead className="P-4">
                Customer
            </TableHead>
            <TableHead className="P-4">
                Email
            </TableHead>
            <TableHead className="text-center P-4">
                Status
            </TableHead>
            <TableHead className="text-right P-4">
                Value
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-left">
                <span className="font-semibold">26/6/2025</span>
            </TableCell>
            <TableCell className="text-left">
                <span className="font-semibold">Napwa</span>
            </TableCell>
            <TableCell className="text-left">
                <span className="">paalli@yahoo.com</span>
            </TableCell>
            <TableCell className="text-center">
                <Badge className="rounded-full bg-white text-black">Open</Badge>
            </TableCell>
            <TableCell className="text-right p-4">
                <span className="font-semibold">$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
