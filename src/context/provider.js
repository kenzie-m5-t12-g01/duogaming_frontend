import HomePageProvider from "./MainPage";


const Providers = ({ children }) => {
  return (
    <HomePageProvider>{children}</HomePageProvider>
  );
};

export { Providers };
