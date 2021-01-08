import { shallowMount } from '@vue/test-utils';
import HelloWorldComponent from '../../src/components/hello-world/HelloWorld.component';
import HelloWorld from '../../src/components/hello-world/HelloWorld.vue';

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

    const sut = wrapper.vm as never as HelloWorldComponent;

    expect(sut.msg).toEqual(msg);
  });

  it('renders props.msg when passed', () => {
    const msg = 'eva learnt test management';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
