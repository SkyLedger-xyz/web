import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

let supabaseClient = null;

export function getSupabaseClient(): string {
  if (supabaseClient) {
    return supabaseClient;
  }

  supabaseClient = createPagesBrowserClient();
  return supabaseClient;
}
