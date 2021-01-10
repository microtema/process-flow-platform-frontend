import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CallbackComponent extends Vue {
  mounted() {
    console.log('callback...')
  }
}
