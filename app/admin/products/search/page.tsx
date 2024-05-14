import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm
            }
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function SearchPage({searchParams}: {searchParams: {search: string}}) {

    const products = await searchProducts(searchParams.search)


  return (
    <>
        <Heading>Resultado de la Búsqueda : {searchParams.search}</Heading>

        <div className="flex flex-col lg:flex-row lg:justify-end gap-5">

          <ProductSearchForm />
        </div>

        {products.length ? (
            <ProductsTable 
                products={products}
            />
        ) : <p className="text-cener text-lg">No hay resultado de la busqueda</p>}
    </>
  )
}
