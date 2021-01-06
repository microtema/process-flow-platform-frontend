import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/hello-world/HelloWorld.vue';
import HelloWorldComponent from '@/components/hello-world/HelloWorld.component';

describe('HelloWorld.vue', () => {
  it('verify html', () => {
    const msg = 'new message';

    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('verify instance', () => {
    const msg = 'new message';

    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    const sut = wrapper.vm as HelloWorldComponent;

    expect(sut.msg).toEqual(msg);
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message';

    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
