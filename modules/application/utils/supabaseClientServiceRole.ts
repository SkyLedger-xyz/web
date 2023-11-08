import { createClient, SupabaseClient } from '@supabase/supabase-js';

export function supabaseClientServiceRole(): SupabaseClient {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_SECRET, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
