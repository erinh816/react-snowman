import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";

it("renders without crashing", function () {
  render(<Snowman />);
});

it("ends game after max amount of guesses", function () {
  const { container, debug } = render(<Snowman
    images={[img0, img1, img2]}
    words={["add"]}
    maxWrong={1} />);
  const letterZ = container.querySelector(".z");
  const letterY = container.querySelector(".y");

  fireEvent.click(letterZ);
  fireEvent.click(letterY);

  expect(container.querySelector('.Button-area')).not.toBeInTheDocument();

  expect(container.querySelector("h2")).toContainHTML("You lose.");

});
