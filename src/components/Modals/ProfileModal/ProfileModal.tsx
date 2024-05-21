import React from "react";
import { ModalLayout } from "../ModalLayout";
import {
  StyledProfileBtn,
  StyledProfileContainer,
  StyledProfileHeader,
  StyledProfileInfo,
  StyledProfileInfoItem,
} from "../Modal.styled";
import profileHolder from "./assets/profile-holder.svg";
import closeIcon from "./assets/close-icon.svg";
import { useDispatch } from "react-redux";
import { setModal } from "../../../store/features/modal/modalSlice";
export const ProfileModal = () => {
  const dispatch = useDispatch();

  return (
    <ModalLayout size="big">
      <img
        src={closeIcon}
        alt="FlowrSpot Close Profile"
        className="close-icon"
        onClick={() => dispatch(setModal(null))}
      />
      <StyledProfileContainer>
        <StyledProfileHeader>
          <img src={profileHolder} alt="FlowrSpot Profile" />
          <div>
            <p className="name">Michael Berry</p>
            <p className="sightings">47 sightings</p>
          </div>
        </StyledProfileHeader>
        <StyledProfileInfo>
          <StyledProfileInfoItem>
            <p className="label">First Name</p>
            <p className="info">Michael</p>
          </StyledProfileInfoItem>
          <StyledProfileInfoItem>
            <p className="label">Last Name</p>
            <p className="info">Berry</p>
          </StyledProfileInfoItem>
          <StyledProfileInfoItem>
            <p className="label">Date of Birth</p>
            <p className="info">May 20, 1980</p>
          </StyledProfileInfoItem>
          <StyledProfileInfoItem>
            <p className="label">Email Address</p>
            <p className="info">michael.berry@gmail.com</p>
          </StyledProfileInfoItem>
        </StyledProfileInfo>

        <StyledProfileBtn onClick={() => alert("Logout")}>
          Logout
        </StyledProfileBtn>
      </StyledProfileContainer>
    </ModalLayout>
  );
};
