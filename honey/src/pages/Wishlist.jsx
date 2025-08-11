import React from "react";
import { useWishlist } from "../hooks/use-wishlist";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();

  if (!wishlistItems || wishlistItems.length === 0) {
    return <p>Favorilər boşdur</p>;
  }

  return (
    <div>
      {wishlistItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          {/* və s. */}
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
