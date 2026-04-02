import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

if (typeof url === 'string' && url.length > 0 && typeof anonKey === 'string' && anonKey.length > 0) {
  client = createClient(url, anonKey);
}

export function getSupabase(): SupabaseClient | null {
  return client;
}
