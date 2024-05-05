"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Category } from "@prisma/client"
import { Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type MobileNavbarProps = {
    categories: Category[]
}

const MobileNavbar = ({categories}: MobileNavbarProps) => {
    const params = useParams()
    return (
        <section className="max-w-[264px]">
            <Sheet>
                <SheetTrigger asChild>
                    <Image
                        src="/hamburger.svg"
                        width={36}
                        height={36}
                        alt="Hamburger icon"
                        className="cursor-pointer sm:hidden"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-dark-2">
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

                    <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-4  pt-10 text-white">
                                {categories.map(category => {
                                    return (
                                        <SheetClose asChild key={category.id}>
                                            <Link 
                                                className={`${category.slug === params.category ? 'bg-amber-500' : ""} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
                                                href={`/order/${category.slug}`}
                                            >
                                                <div className="w-12 h-12 relative">
                                                    <Image 
                                                        fill
                                                        src={` /icon_${category.slug}.svg`}
                                                        alt="Imagen Categoria"
                                                    />
                                                </div>
                                        
                                                <p 
                                                    className="text-lg font-semibold"
                                                >
                                                    {category.name}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                      )
                                })}

                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNavbar