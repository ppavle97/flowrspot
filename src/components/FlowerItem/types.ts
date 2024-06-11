export interface StyledFlowerItemProps {
  favourite?: boolean;
  profile_picture: string;
}

export interface FlowerItemProps {
  favourite?: boolean;
  name: string;
  latin_name: string;
  sightings: string;
  profile_picture: string;
  onFavouriteClick: () => void;
}
