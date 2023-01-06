import { createContext } from "react";

export const HomePageContext = createContext()

const HomePageProvider = ({children}) => {

  
  return(
    <HomePageContext.Provider value={{}}>
      {children}
    </HomePageContext.Provider>
  )
}

export default HomePageProvider