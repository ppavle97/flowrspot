import React, { useEffect } from "react";
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
import { logout } from "../../../store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchCurrentUser } from "../../../store/features/user/userActions";

export const ProfileModal = () => {
  const dispatch = useDispatch();
  const asyncDispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const error = useAppSelector((state) => state.user.error);
  const loading = useAppSelector((state) => state.user.loading);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setModal(null));
  };

  useEffect(() => {
    asyncDispatch(fetchCurrentUser());
  }, [asyncDispatch]);

  return (
    <ModalLayout size="big">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {error && <p className="error">Error: {error}</p>}{" "}
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
                <p className="name">
                  {user?.first_name} {user?.last_name}
                </p>
                <p className="sightings">47 sightings</p>
              </div>
            </StyledProfileHeader>
            <StyledProfileInfo>
              <StyledProfileInfoItem>
                <p className="label">First Name</p>
                <p className="info">{user?.first_name}</p>
              </StyledProfileInfoItem>
              <StyledProfileInfoItem>
                <p className="label">Last Name</p>
                <p className="info">{user?.last_name}</p>
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

            <StyledProfileBtn onClick={handleLogout}>Logout</StyledProfileBtn>
          </StyledProfileContainer>
        </>
      )}
    </ModalLayout>
  );
};
