import { StyledFlowerItem } from "./FlowerItem.styled";
import { FlowerItemProps } from "./types";

export const FlowerItem = (props: FlowerItemProps) => {
  const { favourite, name, description, sightings } = props;
  const flowerItemImage = require("./assets/flowerItemImage.png");
  return (
    <StyledFlowerItem backgroundImg={flowerItemImage} favourite={favourite}>
      <div className="content">
        <h3>{name}</h3>
        <p className="description">{description}</p>
        <p className="sightings">{sightings}</p>
      </div>
    </StyledFlowerItem>
  );
};
