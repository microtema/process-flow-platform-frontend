import { shallowMount } from '@vue/test-utils'
import HelloWorldComponent from '@/components/hello-world/HelloWorld.component'
import HelloWorld from '@/components/hello-world/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('verify html', () => {
    const msg = 'new message'

    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
