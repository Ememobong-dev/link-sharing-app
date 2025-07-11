"use client";"s"

import { create } from "zustand";
import { persist } from "zustand/middleware";


interface CounterState {
    count: number
  increase: () => void
  decrease: () => void
  reset: () => void
}


export const useCounterStore = create<CounterState>()(
    persist(
        (set) => ({
            count: 0,
            increase: () => set( (state) => ({count: state.count + 1})),
            decrease: () => set( (state) => ({count: state.count - 1})),
            reset: () => set({count: 0}),
        }),
        {
            name: "counter-storage",
        }

    )
)