import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { ProductsContextProvider } from "./contexts/product-context";
import { FilterContextProvider } from "./contexts/filter-context";
import { CartContextProvider } from "./contexts/cart-context";
import { UserContextProvider } from "./contexts/user-context";
import { Auth0Provider } from "@auth0/auth0-react";

const { REACT_APP_CLIENT_ID, REACT_APP_DOMAIN } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_DOMAIN}
      clientId={REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserContextProvider>
        <ProductsContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </FilterContextProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
