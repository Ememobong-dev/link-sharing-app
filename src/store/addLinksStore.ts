"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";


interface AddLinkInterface {
    platform: string;
    link: string;
    linkOnChange: () => void;
    platformOnChange: () => void;
    // saveChanges: () => void;

}

export const useAddLink = create<AddLinkInterface>()(
    persist(
        (set) => ({
            platform: "Github",
            link: "",
            linkOnChange: () => set((state) => ({link: state.link})),
            platformOnChange: () => set((state) => ({platform: state.platform})),
        }),
        {
            name: "addedLinks-storage"
        }
    )
)