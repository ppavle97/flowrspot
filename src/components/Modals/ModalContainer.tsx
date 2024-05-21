import React from "react";
import { LoginModal } from "./LoginModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { SingUpModal } from "./SingUpModal";
import { ProfileModal } from "./ProfileModal";
import { SuccessAuthModal } from "./SuccessAuthModal";

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
