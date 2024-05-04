import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { prisma } from "@/src/lib/prisma";

export default async function OrderNavbar() {

    const categories = await prisma.category.findMany();

  return (
    <nav className="flex justify-between items-center z-50 w-full px-6 py-2 bg-gray-400 sm:hidden">
        
        <Link
          href="/order/cafe"
          className="flex items-center gap-1"
        >
          <Image 
            src="/logo.svg"
            width={32}
            height={32}
            alt="Logo cafe"
            className="max-sm:size-12"
          />
        </Link>

        <MobileNavbar 
          categories={categories}
        />
    </nav>
  )
}
