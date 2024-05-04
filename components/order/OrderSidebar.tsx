import { prisma } from "@/src/lib/prisma"
import CategoryIcon from "../ui/CategoryIcon"



async function getCategory() {
  return await prisma.category.findMany()
}

export default async function OrderSidebar() {
  const categories = await getCategory()

  return (
    <aside className="max-sm:hidden md:w-72 md:h-screen bg-white">
        <nav className="mt-10">
          {categories.map(category => (
            <CategoryIcon 
              key={category.id}
              category={category}
            />
          ))}
        </nav>
    </aside>
  )
}
