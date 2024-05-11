import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      category: true
    }
  })

  return products
}

export type ProductsWithCategoty = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage() {

  const products = await getProducts()

  return (
    <>
        <Heading>Administración de Productos</Heading>

        <ProductsTable 
          products={products}
        />
    </>
  )
}
