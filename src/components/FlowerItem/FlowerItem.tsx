import { StyledFlowerItem } from "./FlowerItem.styled";
import { FlowerItemProps } from "./types";

import whiteStar from "./assets/whiteStar.svg";
import silverStar from "./assets/silverStar.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const FlowerItem = (props: FlowerItemProps) => {
  const {
    favourite,
    name,
    latin_name,
    sightings,
    profile_picture,
    onFavouriteClick,
  } = props;

  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <StyledFlowerItem profile_picture={profile_picture} favourite={favourite}>
      {isLoggedIn && (
        <div className="favourite" onClick={onFavouriteClick}>
          <img
            src={favourite ? whiteStar : silverStar}
            alt="FlowrSpot Favourite flower"
          />
        </div>
      )}
      <div className="content">
        <h3>{name}</h3>
        <p className="latin">{latin_name}</p>
        <p className="sightings">{sightings}</p>
      </div>
    </StyledFlowerItem>
  );
};
