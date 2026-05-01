import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    try {
      const res = await pb.collection('events').getFullList({ 
        sort: 'eventDate',
        filter: 'eventDate >= @now',
        $autoCancel: false 
      });
      setEvents(res);
      setError(null);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return { events, loading, error, refetch: fetchEvents };
}