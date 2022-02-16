import { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

import { GlobalStyles } from "./components/GlobalStyles";
import Navigation from "./components/navigation/Navigation";
import { darkTheme, lightTheme } from "./components/themes";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Design from "./components/pages/Design";
import Links from "./components/Links";
import useResponsive from "./components/useResponsive";
// import ScrollToTop from "./components/ScrollToTop";
import SquareOne from "./components/svg/SquareOne";
import Footer from "./components/Footer";

import "./font-styles.css";

const MainWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  /* min-height: calc(100vh - 60px); */
`;

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  const { windowWidth } = useResponsive();

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const links = windowWidth > 1024 ? <Links /> : null;

  return (
    <>
      {/* <ScrollToTop /> */}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <MainWrapper>
          <Navigation click={themeToggle} open={open} setOpen={setOpen} />
          <AnimatePresence
            exitBeforeEnter
            // initial={false}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route exact path="/Design" component={Design} />
              <Route path="/Work" component={Work} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
            </Switch>
          </AnimatePresence>
          {links}
          <SquareOne />
        </MainWrapper>
        <AnimatePresence>
          <Footer location={location} key={location.key} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
