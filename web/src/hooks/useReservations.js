import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useReservations(userId) {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReservations = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await pb.collection('reservations').getFullList({
        filter: `customerId = "${userId}"`,
        sort: '-reservationDate,-reservationTime',
        expand: 'tableId',
        $autoCancel: false
      });
      setReservations(res);
      setError(null);
    } catch (err) {
      console.error("Error fetching reservations:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  const createReservation = async (data) => {
    try {
      const record = await pb.collection('reservations').create(data, { $autoCancel: false });
      await fetchReservations();
      return record;
    } catch (err) {
      console.error("Error creating reservation:", err);
      throw err;
    }
  };

  const cancelReservation = async (id) => {
    try {
      const record = await pb.collection('reservations').update(id, { status: 'cancelled' }, { $autoCancel: false });
      await fetchReservations();
      return record;
    } catch (err) {
      console.error("Error cancelling reservation:", err);
      throw err;
    }
  };

  return { reservations, loading, error, createReservation, cancelReservation, refetch: fetchReservations };
}