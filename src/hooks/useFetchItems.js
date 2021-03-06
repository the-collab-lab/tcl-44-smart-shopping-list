import { useState, useEffect } from 'react';
//firebase
import { db } from '../lib/firebase';
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import useToken from './useToken';

const useFetchItems = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [listeningError, setListeningError] = useState(null);
  const { token } = useToken();

  useEffect(() => {
    setIsLoading(true);
    const ListRef = collection(db, 'Lists');
    const queryParam = query(
      ListRef,
      where('token', '==', token),
      orderBy('isActive', 'desc'),
      orderBy('timeframe'),
      orderBy('itemName'),
    );
    const unsb = onSnapshot(
      queryParam,
      (snapshot) => {
        const result = [];
        snapshot.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });

        setIsLoading(false);
        setData(result);
        setListeningError(null);
      },
      (error) => {
        setIsLoading(false);
        setListeningError('could not fetch data');
        console.log(error.message);
      },
    );

    return () => unsb();
  }, [token]);

  return { data, isLoading, listeningError };
};

export default useFetchItems;
