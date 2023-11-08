'use client';

import { createContext, useContext, useState } from 'react';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

const Context = createContext(undefined);

export default function SupabaseProvider({ children }) {
  const [supabase] = useState(() => createPagesBrowserClient());

  return <Context.Provider value={{ supabase }}>{children}</Context.Provider>;
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider');
  }

  return context;
};
