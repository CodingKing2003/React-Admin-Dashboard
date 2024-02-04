import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <Link to="/admin/dashboard">
                  <button>Visit Dashboard</button>
                </Link>
              }
            />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/transaction" element={<Transactions />} />
            <Route path="/admin/customer" element={<Customers />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
