"use client"

import { useRouter } from "next/navigation";
import { GiReturnArrow } from "react-icons/gi";



export default function GoBackButton() {
    const router = useRouter()

  return (
    <div className="flex">
        <button
            onClick={() => router.back()}
            className="flex items-center w-full lg:w-auto bg-amber-500 text-lg px-10 py-3 text-center font-bold cursor-pointer"
        ><GiReturnArrow className="h-5 w-5" /> <span>&nbsp;</span> Volver</button>
    </div>
  )
}
