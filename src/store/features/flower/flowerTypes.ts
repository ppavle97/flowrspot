export interface Flower {
  id: number;
  name: string;
  latin_name: string;
  sightings: 0;
  profile_picture: string;
  favourite: boolean;
}

export interface FlowerState {
  flowers: Flower[];
  loading: boolean;
  error: string | null;
}
