
import { shallow } from "enzyme";
import * as React from "react";

import { Hello } from "../../src/components/Hello";

describe("Hello", () => {
  test("renders component", () => {
    const component = shallow(<Hello compiler="TypeScript" framework="React"/>);
    expect(component.find("h1")).toHaveLength(1);
  });
});
