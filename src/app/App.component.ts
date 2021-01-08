import { Options, Vue } from 'vue-class-component';
import { Home, Definition } from '@/views'; // @ is an alias to /src

@Options({
  components: {
    Home,
    Definition,
  },
})
export default class AppComponent extends Vue {
}
