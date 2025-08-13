import { createContext, useContext, useState } from "react";

const AddtocardContext = createContext();

export const AddtocardProvider = ({ children }) => {
  const [addtocard, setAddtocard] = useState([]);

  const toggleAddtocard = (product) => {
    setAddtocard((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product]; 
      }
    });
  };

  const removeFromAddtocard = (productId) => {
    setAddtocard((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <AddtocardContext.Provider value={{ addtocard, toggleAddtocard, removeFromAddtocard }}>
      {children}
    </AddtocardContext.Provider>
  );
};

export const useAddtocard = () => useContext(AddtocardContext);
