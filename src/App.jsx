import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";

import { createGlobalStyle } from "styled-components";
import InputFieldComponent from "./pages/components/InputFieldComponent.jsx";

// <-------------------- function, return -------------------->

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
            <Route path="/login" element={<InputFieldComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// <-------------------- styled-components -------------------->

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: black};
`;
