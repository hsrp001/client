import React, { useContext } from 'react'
import { CartContext } from '../context/Cardcontext'

function Cart() {
  const  {setIsCartOpen ,cart ,removeFromCart}  =  useContext(CartContext)
  return (
    <div>
      <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" >
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"  ></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                <div class="ml-3 flex h-7 items-center">
                  <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={()=> setIsCartOpen(false)}>
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Close panel</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    {
                      cart?.map((i)=>
                      
                        <li class="flex py-6">
                          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img src={i?.imageLink1} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"/>
                          </div>
    
                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{i.productName}</a>
                                </h3>
                                <p class="ml-4">${i?.price}</p>
                              </div>
                            
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Qty 1</p>
    
                              <div class="flex">
                                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=>removeFromCart(i)}>Remove</button>
                              </div>
                            </div>
                          </div>
                        </li>
                     
                      )
                    }

                   
                  </ul>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cart