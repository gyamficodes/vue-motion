import PropsComponent from "@/components/PropsComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("PropsComponent.vue", () => {
  it("renders Props Correctly", () => {
    const props = {
      name: "John",
      Cobro: "Hello WOrld",
      greetingMessage: "Good Morning",
      post: { title: "Gyamficodes", content: "Learning Vitest" },
    };
    const wrapper = mount(PropsComponent, { props });
    expect(wrapper.props()).toMatchObject(props);
  });

  it('emits event correctly', )

});
