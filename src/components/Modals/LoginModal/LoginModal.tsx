import React from "react";
import { ModalLayout } from "../ModalLayout";

export const LoginModal = () => {
  return (
    <ModalLayout closeText="I don't want to Login">
      <p>Hello from Login modal</p>
    </ModalLayout>
  );
};
