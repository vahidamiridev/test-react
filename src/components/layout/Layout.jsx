import React from "react";
import { Section } from "./Layout.style";
import { Route , Routes } from "react-router-dom";
import Login from "../../pages/login/Login";
import Home from "../../pages/home/Home";
import Sidebar from "../sidebar/Sidebar";
import Register from "../../pages/register/Register";
import ProductList from "../productList/ProductList";
import Whiteboard from "../../pages/whiteboard/Whiteboard";


export default  ({chidren})=>{
    return(
        <>
           <Section id="layout">     
                <div id="header" className="w-full h-[50px] bg-yellow-500">Header</div>
                <div className="flex ">
                <div id="sidebar" className="w-1/6 h-[520px] bg-gray-200">
                    <Sidebar/>
                </div>

                    <div id="main" className="w-5/6 h-[520px]">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<ProductList/>}/>

                        <Route path="/login" element = {<Login/>}/>
                        <Route path="/register" element = {<Register/>}/>
                        <Route path="/whiteboard" element={<Whiteboard/>}/>

                    </Routes>
                    </div>
                </div>

                <div id="footer" className="w-full h-[50px] bg-pink-500">Footer</div>
            </Section>

        </>
    )

}
