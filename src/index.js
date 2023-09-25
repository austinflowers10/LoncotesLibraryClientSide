import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialsList from "./components/tickets/MaterialsList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import { PatronsList } from "./components/patrons/PatronsList";
import { PatronDetails } from "./components/patrons/PatronDetails";
import { CheckoutsList } from "./components/checkouts/CheckoutsList";
import BrowseMaterials from "./components/tickets/BrowseMaterials";
import { MaterialCheckout } from "./components/tickets/MaterialCheckout";
import { OverdueCheckouts } from "./components/checkouts/OverdueCheckouts";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialsList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
          <Route path=":id/checkout" element={<MaterialCheckout/>} />
        </Route>
        <Route path="browse">
          <Route index element={<BrowseMaterials />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronsList />} />
          <Route path=":id" element={<PatronDetails />} />
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutsList />} />
          <Route path="overdue" element={<OverdueCheckouts/>} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
