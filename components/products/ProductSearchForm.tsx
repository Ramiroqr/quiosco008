"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline" 
import { SearchSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"

export default function ProductSearchForm() {

    const handleSearchForm = (formData: FormData) => {
        const data = {
            search: formData.get('search')
        }

        const result = SearchSchema.safeParse(data)
        if(!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        redirect(`/admin/products/search?search=${result.data.search}`)
    }

  return (
    <form
        action={handleSearchForm}
        className="flex items-center"
    >
        <input 
            type="text" 
            placeholder="Buscar Producto"
            className="p-2 placeholder-gray-400 w-full"
            name="search"
        />

        <button 
            type="submit"
            className="flex items-center bg-indigo-600 px-3 py-2 uppercase text-white cursor-pointer" 
            value={'Buscar'}
        ><MagnifyingGlassIcon className="h-5 w-5" /> <span>&nbsp;</span> Buscar</button>
    </form>
  )
}
