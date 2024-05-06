"use client"

import { useStore } from '@/src/store'
import React from 'react'
import ProductDetails from './ProductDetails'

export default function OrderSummary() {
  const order = useStore((state) => state.order)

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
            </div>
          )
        }
    </aside>
  )
}
