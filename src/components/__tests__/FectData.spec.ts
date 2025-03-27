import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import Counter from "../VueTestComp/Counter.vue";

describe("Counter Component", () => {
  test("matches snapshot", () => {
    const wrapper = mount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});