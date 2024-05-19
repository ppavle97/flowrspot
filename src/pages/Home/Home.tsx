import React from "react";
import { FlowerItem, Layout } from "../../components";
import { StyledFlowerList } from "./Home.styled";

export const Home = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Layout>
      <StyledFlowerList>
        {items.map((item) => (
          <FlowerItem
            name="Balloon Flower"
            description="Platycodon grandiflorus"
            sightings="127 sightings"
          />
        ))}
      </StyledFlowerList>
    </Layout>
  );
};
