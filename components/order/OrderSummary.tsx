"use client"

import { useStore } from '@/src/store'
import { useMemo } from 'react'
import ProductDetails from './ProductDetails'
import { formatCurrency } from '@/src/utils'
import { createOrder } from '@/actions/create-order-actions'
import { OrderSchema } from '@/src/schema'
import { toast } from 'react-toastify'

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + item.subtotal, 0), [order])

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name')
    }

    const result = OrderSchema.safeParse(data)
    if(!result.success) {
      result.error.issues.forEach(issue => {
        toast.error(issue.message)
      })
      return
    }


    const response = await createOrder(data)
    if(response?.errors) {
        response.errors.forEach(issue => {
          toast.error(issue.message)
        })
        return
      }
  }

  return (
    <aside className='sm:h-screen sm:overflow-y-scroll sm:w-64 xl:w-96 px-5 '>
        <h1 className='sticky top-0 text-4xl text-center font-black bg-gray-200 py-5'>Mi Pedido</h1>

        {order.length === 0 
          ? <p className='text-center my-10'>El carrito esta vacio</p>
          : (
            <div className='mt-5'>
              {order.map(item => (
                <ProductDetails 
                  key={item.id}
                  item={item}
                />
              ))}
              <div className='sticky bottom-0 bg-gray-200 border border-gray-200 rounded-xl shadow '>
                <p className='text-2xl mt-10 text-center bg-indigo-300 py-2 rounded'>
                    Total a pagar: {''}
                    <span className='font-bold'>{formatCurrency(total)}</span>
                </p>

                <form 
                  className='mt-5 space-y-5'
                  action={handleCreateOrder}
                >
                  <input 
                    type='text'
                    placeholder='Tu Nombre'
                    className='bg-white border border-gray-100 p-2 w-full'
                    name='name'
                  />

                    <input 
                      type='submit'
                      className='py-2 rounded uppercase text-white bg-indigo-600 hover:bg-indigo-800 text-center cursor-pointer font-bold w-full'
                      value="Confirmar pedido"
                    />
                </form>
              </div>
            </div>
          )
        }
    </aside>
  )
}
