import { Options, Vue } from 'vue-class-component';
import ProcessDefinitionApiGateway from './ProcessDefinition.api-gateway';
import ProcessDefinitionModel from './process-definition.model';

@Options({
  components: {},
})
export default class ProcessDefinitionComponent extends Vue {
  apiGateway: ProcessDefinitionApiGateway = new ProcessDefinitionApiGateway();

  entries: Array<ProcessDefinitionModel> = [];

  mounted() {
    this.apiGateway.query().subscribe((it) => {
      const { content } = it;
      this.entries = content;
    });
  }
}
