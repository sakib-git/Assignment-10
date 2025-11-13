import axios from 'axios';
import { useEffect, useState } from 'react';

const UseBills = () => {
  const [bills, setBill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('https://assignment-10-backend-six.vercel.app/bills').then((res) => {
      setBill(res.data);
      setLoading(false);
    });
  }, []);
  return { bills, loading };
};

export default UseBills;