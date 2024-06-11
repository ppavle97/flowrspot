import React, { useEffect } from "react";
import { FlowerItem, Layout } from "../../components";
import { StyledFlowerList } from "./Home.styled";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchFlowers } from "../../store/features/flower/flowerActions";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { flowers, loading, error } = useAppSelector((state) => state.flowers);

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  const onFavouriteClick = () => {
    alert(
      "Didn't find as requirements in task to implement handling favourites"
    );
  };

  return (
    <Layout>
      <StyledFlowerList>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        {flowers.map((flower) => (
          <FlowerItem
            key={flower.id}
            name={flower.name}
            latin_name={flower.latin_name}
            sightings={`${flower.sightings} sightings`}
            favourite={flower.favourite}
            profile_picture={flower.profile_picture}
            onFavouriteClick={onFavouriteClick}
          />
        ))}
      </StyledFlowerList>
    </Layout>
  );
};
