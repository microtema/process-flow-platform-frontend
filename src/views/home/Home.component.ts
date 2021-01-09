import Vue from 'vue'
import Component from 'vue-class-component'
import HelloWorld from '@/components/hello-world/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class HomeComponent extends Vue {}
