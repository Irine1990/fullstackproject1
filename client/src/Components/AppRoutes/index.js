import { Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Customers";
import Board from "../../Pages/Board";
import Inventory from "../../Pages/Inventory";
import Orders from "../../Pages/Orders";

import CustomersAddPage from "../../Pages/CustomersAddPage";
import CustomersEditPage from "../../Pages/CustomersEditPage";



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Board />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/customer/add" element={<CustomersAddPage />}></Route>
            <Route path="/customer/edit/:id" element={<CustomersEditPage />}></Route>

        </Routes>
    );
}
export default AppRoutes;