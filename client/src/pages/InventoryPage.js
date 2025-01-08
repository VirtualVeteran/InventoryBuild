import React, { useEffect, useState } from 'react';
import { fetchItems } from '../utils/itemUtils';

function Inventory() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            try {
                const items = await fetchItems();
                setItems(items);
            } catch (error) {
                console.error('Error loading items:', error);
            }
        };

        getItems();
    }, []);

    return (
        <div>
            <h1>Inventory</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Inventory;
