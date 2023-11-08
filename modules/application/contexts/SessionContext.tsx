'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import Spinner from '@/modules/common/components/Spinner';

interface SessionContextProviderInterface {
  user?: any;
  isLoggingOut: boolean;
  logout: () => void;
  login: (email: string, password: string) => any;
}

export const SessionContext = createContext<SessionContextProviderInterface>({} as SessionContextProviderInterface);

export const useSession = () => useContext(SessionContext);

export const SessionContextProvider = ({ children, user: userDownstream }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(userDownstream);

  const handleLogin = async () => {
    // const authenticationService = new AuthenticationService(supabase);
    // await authenticationService.login();
  };

  const handleLogout = async () => {

  };

  const memoizedContextValue = useMemo(
    () => ({
      isLoggingOut,
      session,
      user,
      login: handleLogin,
      logout: handleLogout,
    }),
    [isLoggingOut, session, user]
  );

  if (isLoggingOut) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return <SessionContext.Provider value={memoizedContextValue}>{children}</SessionContext.Provider>;
};
