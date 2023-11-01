import React from "react";
import { render } from "@testing-library/react";
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
    maxWrong={3} />);
  const img = container.querySelector("img");
  debug(img);// display the img in console

  expect(img.getAttribute("alt")).toEqual("AC");
  expect(img.getAttribute("src")).toContain("AC.png");

  //guess 6, hide the buttons, show a text you lose
});
