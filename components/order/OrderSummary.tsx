"use client"

import { useStore } from '@/src/store'
import { useMemo } from 'react'
import ProductDetails from './ProductDetails'
import { formatCurrency } from '@/src/utils'

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + item.subtotal, 0), [order])

  return (
    <aside className='sm:h-screen sm:overflow-y-scroll sm:w-64 xl:w-96 p-5'>
        <h1 className='text-4xl text-center font-black'>Mi Pedido</h1>

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

              <p className='text-2xl mt-16 text-center'>
                  Total a pagar: {''}
                  <span className='font-bold'>{formatCurrency(total)}</span>
              </p>
            </div>
          )
        }
    </aside>
  )
}
