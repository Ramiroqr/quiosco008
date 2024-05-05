"use client"

import { Category } from "@prisma/client"
import  Link from "next/link" 
import Image from "next/image"
import { useParams } from "next/navigation"

type CategoryIcomProps = {
    category: Category
}

export default function CategoryIcon({category}: CategoryIcomProps) {
    const params = useParams<{category: string}>()

  return (
    <Link 
        className={`${category.slug === params.category ? 'bg-amber-500' : ""} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        href={`/order/${category.slug}`}
    >
        <div className=" max-xl:w-10 max-xl:h-10 w-16 h-16 relative">
            <Image 
                fill
                src={` /icon_${category.slug}.svg`}
                alt="Imagen Categoria"
            />
        </div>

        <p 
            className="xl:text-xl font-bold max-md:hidden"
        >
            {category.name}
        </p>
    </Link>
  )
}
