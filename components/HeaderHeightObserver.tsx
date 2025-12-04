"use client";

import { useHeaderHeight } from '@/hooks/useHeaderHeight';

const HeaderHeightObserver = () => {
  useHeaderHeight();
  return null;
};

export default HeaderHeightObserver;

