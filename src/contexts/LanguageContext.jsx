import { createContext, useReducer, useContext } from "react";

const LanguageContext = createContext();

const initialState = {
  isForeign: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isForeign: !state.isForeign };

    default:
      throw new Error(`Action ${action.type} unknown`);
  }
}

/* eslint react/prop-types: 0 */
function LanguageProvider({ children }) {
  const [{ isForeign }, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageContext.Provider value={{ isForeign, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("LanguageContext was used outside the LanguageProvider");
  return context;
}

export { LanguageProvider, useLanguage };
