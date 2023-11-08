'use client';

import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import { LazyTippy } from '@/modules/application/components/LazyTippy';

interface TooltipInterface {
  children: any;
  target: any;
  spacing?: 'none' | 's' | 'm' | 'l';
  size?: 's' | 'm' | 'l';
  width?: 'auto' | 'full';
  isInteractive?: boolean;
  scope?: 'local' | 'global';
  placement?: 'top' | 'bottom';
  trigger?: 'mouseenter focus' | 'click';
}

const Tooltip = ({
  children,
  spacing = 'm',
  target,
  size = 'm',
  width = 'auto',
  placement = 'bottom',
  isInteractive = false,
  scope = 'local',
  trigger = 'mouseenter focus',
}: TooltipInterface) => {
  const [body, setBody] = useState(null);
  useEffect(() => {
    setBody(document.body);
  }, []);

  const className = classNames({
    'relative bg-white border': true,

    'p-0': spacing === 'none',
    'p-2': spacing === 's',
    'p-4': spacing === 'm',
    'p-6': spacing === 'l',

    // sizes
    'rounded-lg max-w-xxs min-w-xxs shadow-lg': size === 's',
    'rounded-xl max-w-xxs shadow-xl': size === 'm',
    'rounded-xl max-w-sm shadow-xl': size === 'l',

    // width
    'w-full': width === 'full',
  });

  return (
    <LazyTippy
      content={
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={className}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      }
      maxWidth="none"
      placement={placement}
      interactive={isInteractive}
      appendTo={scope === 'global' ? body : 'parent'}
      trigger={trigger}
    >
      {target}
    </LazyTippy>
  );
};

export default Tooltip;
