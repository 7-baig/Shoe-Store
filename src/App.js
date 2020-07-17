import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import Layout from './components/Layout/Layout'
import ItemPage from './components/ItemPage/ItemPage'
import StoreProvider from './Context/Store'
import CartProvider from './Context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <StoreProvider>
      <CartProvider>
        <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="cart" element={<Cart />} />
                <Route path=":id" element={<ItemPage />} />
              </Routes>
            </Layout>
        </BrowserRouter>
      </CartProvider>
    </StoreProvider>
  );
}

export default App;
