import { fireEvent } from "@testing-library/react";
import { act } from "react";
import { FlowerItemProps } from "../types";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { FlowerItem } from "../FlowerItem";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";

const mockStore = configureStore([]);
describe("FlowerItem component", () => {
  const defaultProps: FlowerItemProps = {
    favourite: false,
    name: "Rose",
    latin_name: "Latin Name",
    sightings: "10",
    profile_picture: "./assets/flower.svg",
    onFavouriteClick: jest.fn(),
  };

  const store = mockStore({
    user: { isLoggedIn: true },
  });

  test("renders FlowerItem component", () => {
    render(
      <Provider store={store}>
        <FlowerItem {...defaultProps} />
      </Provider>
    );
    expect(screen.getByText("Rose")).toBeInTheDocument();
    expect(screen.getByText("Latin Name")).toBeInTheDocument();
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
    const notLoggedInStore = mockStore({
      user: { isLoggedIn: false },
    });
    render(
      <Provider store={notLoggedInStore}>
        <FlowerItem {...defaultProps} />
      </Provider>
    );
    const favouriteButton = screen.queryByTestId("favourite");
    expect(favouriteButton).not.toBeInTheDocument();
  });

  test("calls onFavouriteClick when favourite button is clicked", () => {
    render(
      <Provider store={store}>
        <FlowerItem {...defaultProps} />
      </Provider>
    );
    const favouriteButton = screen.getByTestId("favourite");
    fireEvent.click(favouriteButton);
    expect(defaultProps.onFavouriteClick).toHaveBeenCalledTimes(1);
  });
});
