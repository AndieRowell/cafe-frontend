import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStateProvider } from "../context/GlobalState";
import "../styles/globals.css";
import styles from "../styles/global.module.css";
// import { exploreData } from "../../public/data/cafes";
// import { drinksData } from "../../public/data/drinks";


function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </GlobalStateProvider>
  );
}
export default MyApp;

//can import a loading or progress bar here
//Router.events.on("routeChangeStart", progress.start);
//Router.events.on("routeChangeComplete", progress.finish);
//Router.events.on("routeChangeError", progress.finish);
