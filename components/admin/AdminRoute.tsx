"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
    img: string;
}
}

export default function AdminRoute({link}: AdminRouteProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.url)

  return (
    <Link
        className={`${isActive ? 'bg-amber-500' : ''} font-semibold text-lg border-t border-gray-200 p-3 last-of-type:border-b flex gap-3`}
        href={link.url}
        target={link.blank ? '_blank' : ''}
    >
      <Image 
        src={link.img}
        alt={`Imagen ${link.text}`}
        height={25}
        width={25}
      />
      {link.text}
    </Link>
  )
}
