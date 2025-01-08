import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicItems from './pages/PublicItems';
import LoginPage from './pages/LoginPage';
import InventoryPage from './pages/InventoryPage';
import ItemDetailPage from './pages/ItemDetailPage';
import EditItemPage from './pages/EditItemPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublicItems />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/inventory" element={<InventoryPage />} />
                <Route path="/item/:id" element={<ItemDetailPage />} />
                <Route path="/item/:id/edit" element={<EditItemPage />} />
            </Routes>
        </Router>
    );
}

export default App;

