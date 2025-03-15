import { mount} from  "@vue/test-utils"
import Counter from "@/components/VueTestComp/Counter.vue";
import { describe, it, expect } from "vitest";


describe("Counter.vue" , () => {
   it('renders the correct initial text', () => {
       const wrapper = mount(Counter);
       expect(wrapper.text()).toContain('0');
   })

   it('increments count on click', async () => {
    const wrapper = mount(Counter);
     await  wrapper.find('button').trigger('click');
     expect(wrapper.text()).toContain('1')
   })

   it('decrements count on click', async () => {
    const wrapper = mount(Counter);
    await wrapper.find('button').trigger('click');
     expect(wrapper.text()).toContain('-1')
   })

   it('resets count on click', async () => {
    const wrapper = mount(Counter);
    await wrapper.find('button').trigger('click');
     expect(wrapper.text()).toContain('Reset')
   })
})






