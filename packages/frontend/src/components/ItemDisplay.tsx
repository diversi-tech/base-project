import React, { useState, useEffect } from 'react';
import { getItemById } from '../services/api';
import { FamilyMeeting } from '../types';

const ItemDisplay: React.FC = () => {
  const [item, setItem] = useState<FamilyMeeting | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        // Fetch item with ID 1 (our mock item)
        const data = await getItemById(1);
        setItem(data);
      } catch (err) {
        setError('Failed to fetch the item. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>No item found.</div>;

  return (
    <div className="item-display">
      <h2>Family Meeting Details</h2>
      <div className="item-card">
        <h3>{item.name}</h3>
        <p>Family ID: {item.familyId}</p>
        <p>Money: ₪{item.money.toFixed(2)}</p>
      </div>
      <div className="item-json">
        <h3>JSON Data:</h3>
        <pre>{JSON.stringify(item, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ItemDisplay;