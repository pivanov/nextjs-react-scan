'use client'

import { scan } from "react-scan";
import { useEffect } from "react";
export const ReactScan = () => {
  useEffect(() => {
    scan();
  }, []);
  return null;
};
