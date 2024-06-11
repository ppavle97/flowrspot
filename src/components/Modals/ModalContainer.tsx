import React from "react";
import { LoginModal } from "./LoginModal";
import { SingUpModal } from "./SingUpModal";
import { ProfileModal } from "./ProfileModal";
import { SuccessAuthModal } from "./SuccessAuthModal";
import { useAppSelector } from "../../store/hooks";

export const ModalContainer = () => {
  const modalType = useAppSelector((state) => state.modal.modalType);

  if (!modalType) return null;

  switch (modalType) {
    case "login":
      return <LoginModal />;
    case "signup":
      return <SingUpModal />;
    case "profile":
      return <ProfileModal />;
    case "success_singup":
      return (
        <SuccessAuthModal
          description="You have successfully signed up for FlowrSpot!"
          type="singup"
        />
      );
    case "success_login":
      return (
        <SuccessAuthModal
          description="You have successfully logged into FlowrSpot!"
          type="login"
        />
      );

    default:
      return null;
  }
};
