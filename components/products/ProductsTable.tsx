import { ProductsWithCategoty } from "@/app/admin/products/page"
import { formatCurrency } from "@/src/utils"
import { Product } from "@prisma/client"
import Link from "next/link"

type ProductsTableProps = {
    products: ProductsWithCategoty
}

export default function ProductsTable({ products }: ProductsTableProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-20">
            <div className="mt-8 flow-root ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 ">
                        <table className="min-w-full divide-y divide-gray-300 ">
                            <thead>
                                <tr className="bg-slate-200">
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Producto
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Precio
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Categoría
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {products.map(product => (
                                    <tr key={product.id} className="odd:bg-white even:bg-slate-50">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {formatCurrency(product.price)}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.category.name}
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4  text-sm text-center font-medium sm:pr-0">
                                            <Link
                                                href={`/admin/products/${product.id}/edit`}
                                                className="text-indigo-600 hover:text-indigo-800 border border-slate-100 rounded-lg px-3 py-2 bg-slate-100 hover:bg-slate-200"
                                            >Editar</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}