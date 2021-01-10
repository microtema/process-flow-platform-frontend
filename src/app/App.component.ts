import Vue from 'vue'
import Component from 'vue-class-component'
import { Definition, Home } from '@/views'

@Component({
  components: {
    Home,
    Definition
  }
})
export default class AppComponent extends Vue {
  login () {
    Vue.prototype.$auth.signInWithRedirect()
  }

  logout () {
    Vue.prototype.$auth.signOut()
  }
}
