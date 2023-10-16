"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const layout = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default layout;
