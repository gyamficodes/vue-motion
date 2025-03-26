import PropsComponent from "@/components/PropsComponent.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("PropsComponent.vue", () => {
  it("renders Props Correctly", () => {
    const props = {
      name: "John",
      Cobro: "Hello WOrld",
      greetingMessage: "Good Morning",
      post: { title: "Gyamficodes", content: "Learning Vitest" }, // ✅ Ensure `post` is defined
    };
    const wrapper = mount(PropsComponent, { props });
    expect(wrapper.props()).toMatchObject(props);
  });

  it('emits increaseCount event when button is clicked', async () => {
    const wrapper = mount(PropsComponent, {
      props: {
        name: 'John',
        Cobro: '100',
        greetingMessage: 'Hello',
        post: {
          title: 'Test Title',
          content: 'Test Content',
        },
      },
    });

    // Find the button that emits the event
    const button = wrapper.findAll('button').find(btn => btn.text() === 'addemiy');
    
    // Ensure the button exists
    if (!button) {
      throw new Error('Button with text "addemiy" not found');
    }

    // Simulate the button click
    await button.trigger('click');

    // Assert that the event was emitted
    expect(wrapper.emitted()).toHaveProperty('increaseCount');
  });
  
});
