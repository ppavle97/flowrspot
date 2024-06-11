import { FlowerItemProps } from "../types";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { FlowerItem } from "../FlowerItem";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

const mockStore = configureStore([]);
describe("FlowerItem component snapshot test", () => {
  const defaultProps: FlowerItemProps = {
    favourite: false,
    name: "Rose",
    latin_name: "Latin Name",
    sightings: "10",
    profile_picture: "./assets/flower.svg",
    onFavouriteClick: jest.fn(),
  };

  const notLoggedInStore = mockStore({
    user: { isLoggedIn: false },
  });

  const store = mockStore({
    user: { isLoggedIn: true },
  });
  
  test("matches snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <FlowerItem {...defaultProps} />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders favourite button when user is logged in", () => {
    render(
      <Provider store={store}>
        <FlowerItem {...defaultProps} />
      </Provider>
    );
    const favouriteButton = screen.getByTestId("favourite");
    expect(favouriteButton).toBeInTheDocument();
  });

  test("does not render favourite button when user is not logged in", () => {
    render(
      <Provider store={notLoggedInStore}>
        <FlowerItem {...defaultProps} />
      </Provider>
    );
    const favouriteButton = screen.queryByTestId("favourite");
    expect(favouriteButton).not.toBeInTheDocument();
  });
});
