"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User, Name } from "@/model/user";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name: Name = row.original.name;

      return `${name.first} ${name.last}`;
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "cell",
    header: "Cell",
  },
];
