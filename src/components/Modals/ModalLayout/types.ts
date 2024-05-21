import { ReactNode } from "react";

export interface ModalLayoutProps {
  children: ReactNode;
  closeText?: string;
  size?: string;
}

export interface StyledModalLayoutProps {
  size?: string;
}
