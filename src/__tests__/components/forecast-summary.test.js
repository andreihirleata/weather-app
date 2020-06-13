import React from "react";
import { cleanup, render } from "@testing-library/react";
import ForecastSummary from "../../components/forecast-summary";

afterEach(cleanup);

describe("ForecastSummary", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="200"
      />
    );

    expect(asFragment).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByTestId } = render(
      <ForecastSummary
        date={1525046400000}
        temperature="mockTemperature"
        description="mockDescription"
        icon="200"
      />
    );

    expect(getByTestId("date-id")).toHaveClass("date");
    expect(getByTestId("temperature-id")).toHaveClass("temperature");
    expect(getByTestId("description-id")).toHaveClass("description");
    expect(getByTestId("icon-id")).toHaveClass("icon");
  });
});
