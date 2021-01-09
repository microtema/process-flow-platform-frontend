import Vue from 'vue'
import Component from 'vue-class-component'
import { Home, Definition, Callback } from '@/views'

@Component({
  components: {
    Home,
    Definition,
    Callback
  }
})
export default class AppComponent extends Vue {
  beforeRouteLeave (to: any, from: any, next: any) {
    console.log('beforeRouteLeave')
    next()
  }
}
