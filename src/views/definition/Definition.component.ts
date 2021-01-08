import { Options, Vue } from 'vue-class-component';
import { ProcessDefinition } from '@/components';

@Options({
  components: {
    ProcessDefinition,
  },
})
export default class DefinitionComponent extends Vue {}
