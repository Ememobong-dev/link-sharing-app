
"use client";

import { useCounterStore } from '@/store/counterStore'
import React from 'react'

const Counter = () => {
    const {count, increase, decrease, reset } = useCounterStore();
  return (
   <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Zustand Counter</h1>
      <p className="text-2xl">Count: {count}</p>

      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={increase}
        >
          +
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          onClick={decrease}
        >
          -
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter