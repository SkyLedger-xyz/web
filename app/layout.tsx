import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { ReactNode } from 'react';

import localFont from 'next/font/local';
import NextTopLoader from 'nextjs-toploader';

import Toaster from '@/modules/application/components/Toaster';
import { MODAL_ROOT_ID } from '@/modules/application/utils/modals';

const satoshi = localFont({ src: '../fonts/satoshi/Satoshi-Variable.woff2', variable: '--font-satoshi' });

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="msapplication-TileColor" content="#065f46" />
        <meta name="theme-color" content="#065f46" />
      </head>
      <body className={`${satoshi.variable} relative h-full font-sans text-gray-950`}>
        <NextTopLoader color="#007DFF" showSpinner={false} shadow="0" />
        <div id={MODAL_ROOT_ID} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
