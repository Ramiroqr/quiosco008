import { redirect } from "next/navigation";
import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import ProductSearchForm from "@/components/products/ProductSearchForm";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline"; 


async function ProductCount() {
  return await prisma.product.count()
}

async function getProducts(page: number, pageSize: number) {

  const skip = (page - 1) * pageSize
  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true
    }
  })

  return products
}

export type ProductsWithCategoty = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage({searchParams}: {searchParams: {page: string}}) {
  
  const page = +searchParams.page || 1
  const pageSize = 10
  
  if (page < 1) redirect('/admin/products')
    
  const productsData = getProducts(page, pageSize)
  const totalProductsData = await ProductCount()
  const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
  const totalPages = Math.ceil(totalProducts / pageSize)

  if (page > totalPages) redirect('/admin/products')

  return (
    <>
        <Heading>Administración de Productos</Heading>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
          <Link
            href={'/admin/products/new'}
            className="flex items-center bg-amber-500 w-full lg:w-auto text-lg px-10 py-3 text-center font-bold cursor-pointer"
          ><ClipboardDocumentListIcon className="h-6 w-6" /> <span>&nbsp;</span> Crear Producto</Link>

          <ProductSearchForm />
        </div>

        <ProductsTable 
          products={products}
        />

        <ProductsPagination 
          page={page}
          totalPages={totalPages}
        />
    </>
  )
}
