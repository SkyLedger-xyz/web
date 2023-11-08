import { AuthResponse } from '@supabase/gotrue-js/src/lib/types';
import { SupabaseClient } from '@supabase/supabase-js';

import { getRootUrl } from '@/models/application/services/UrlService';

export class AuthenticationService {
  supabaseClient: SupabaseClient = null;

  constructor(_supabaseClient: SupabaseClient) {
    this.supabaseClient = _supabaseClient;
  }

  async login(): Promise<any> {
    // @todo
  }
}
