import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import BucketPage from "./pages/BucketPage";
import { useWindowScrollTo } from "./hooks/useWindowScrollTo";

function Main() {

  useWindowScrollTo();

  return (
    <>
      <Header/>
      <BucketPage />
      <Footer/>
    </>
  )
}

export default Main;
