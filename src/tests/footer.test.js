import { shallow } from "enzyme";
import React from "react";
import Footer from ".././components/footer/footer.component";

it("Footer component test", () => {
  expect(shallow(<Footer />)).toMatchSnapshot();
});
