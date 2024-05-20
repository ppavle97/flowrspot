import React from "react";
import { LoginModal } from "./LoginModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SingUpModal } from "./SingUpModal";
import { ProfileModal } from "./ProfileModal";
import { SuccessSingUp } from "./SuccessSingUp";

export const ModalContainer = () => {
  const modalType = useSelector((state: RootState) => state.modal.modalType);

  if (!modalType) return null;

  switch (modalType) {
    case "login":
      return <LoginModal />;
    case "signup":
      return <SingUpModal />;
    case "profile":
      return <ProfileModal />;
    case "success_singup":
      return <SuccessSingUp />;

    default:
      return null;
  }
};
