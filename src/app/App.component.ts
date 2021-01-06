import { Options, Vue } from 'vue-class-component';
import { Home, About } from '@/views'; // @ is an alias to /src

@Options({
  components: {
    Home,
    About,
  },
})
export default class AppComponent extends Vue {
}
