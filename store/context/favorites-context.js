import { createContext } from "react";

const FavoritesContext = createContext({
  id: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
