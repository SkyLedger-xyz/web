'use client';

import Link from 'next/link';

import { getUrlHome } from '@/models/application/services/UrlService';

const HeaderTopDown = () => {
  return (
    <div className="flex items-center justify-between p-4 md:px-0">
      <div>
        <Link href={getUrlHome()}>
          <div className="flex items-center gap-2 text-gray-800 transition-all ease-in-out hover:text-primary-600">
            <div className="w-5">
              SkyLedger
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderTopDown;
