import React from "react";
import { mount } from "enzyme";

import PlayerCard from "./PlayerCard";
import { getPlayer } from "mocks";

it("should open results modal", () => {
  // Given
  const playerMock = getPlayer();
  const wrapper = mount(<PlayerCard {...playerMock} />);
  const button = wrapper.find("button");

  // When
  button.simulate("click");

  // Then
  expect(wrapper.find(".player-results-modal").get(0)).toBeDefined();
});
