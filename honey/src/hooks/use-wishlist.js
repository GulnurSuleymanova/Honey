import { useState } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState([]);

  const addWishlistItem = (item) => {
    if (!wishlist.find((w) => w.id === item.id)) {
      setWishlist((prev) => [...prev, item]);
    }
  };

  const removeWishlistItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const inWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return { addWishlistItem, removeWishlistItem, inWishlist, wishlist };
}
