import { useState, useEffect, useCallback } from 'react';
import pb from '@/lib/pocketbaseClient';

export function useProfile(userId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await pb.collection('profiles').getOne(userId, { $autoCancel: false });
      setProfile(res);
      setError(null);
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const updateProfile = async (data) => {
    try {
      const record = await pb.collection('profiles').update(userId, data, { $autoCancel: false });
      setProfile(record);
      return record;
    } catch (err) {
      console.error("Error updating profile:", err);
      throw err;
    }
  };

  return { profile, loading, error, updateProfile, refetch: fetchProfile };
}