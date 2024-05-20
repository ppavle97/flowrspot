import { StyledFlowerItem } from "./FlowerItem.styled";
import { FlowerItemProps } from "./types";

import whiteStar from "./assets/whiteStar.svg";
import silverStar from "./assets/silverStar.svg";

export const FlowerItem = (props: FlowerItemProps) => {
  const {
    favourite,
    name,
    latin_name,
    sightings,
    profile_picture,
    onFavouriteClick,
  } = props;

  return (
    <StyledFlowerItem profile_picture={profile_picture} favourite={favourite}>
      <div className="favourite" onClick={onFavouriteClick}>
        <img
          src={favourite ? whiteStar : silverStar}
          alt="FlowrSpot Favourite flower"
        />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p className="latin">{latin_name}</p>
        <p className="sightings">{sightings}</p>
      </div>
    </StyledFlowerItem>
  );
};
