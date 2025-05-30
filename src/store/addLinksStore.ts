"use client";
import { create } from "zustand";

interface LinkData {
  platform: string;
  link: string;
}

interface AddLinkInterface {
  links: LinkData[];         // live edits
  savedLinks: LinkData[];    // what was saved
  setLinks: (links: LinkData[]) => void;
  updateLink: (index: number, newData: Partial<LinkData>) => void;
  saveLinks: () => void;
  loadLinks: () => void;
}

export const useAddLink = create<AddLinkInterface>((set, get) => ({
  links: [],
  savedLinks: [],

  setLinks: (links) => set({ links }),

  updateLink: (index, newData) => {
    const linksCopy = [...get().links];
    linksCopy[index] = { ...linksCopy[index], ...newData };
    set({ links: linksCopy });
  },

  saveLinks: () => {
    const currentLinks = get().links;
    localStorage.setItem("addedLinks-storage", JSON.stringify(currentLinks));
    set({ savedLinks: currentLinks });
  },

  loadLinks: () => {
    const saved = localStorage.getItem("addedLinks-storage");
    if (saved) {
      const parsed = JSON.parse(saved);
      set({ links: parsed, savedLinks: parsed });
    }
  },
}));
