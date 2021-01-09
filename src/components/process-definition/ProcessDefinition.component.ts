import Vue from 'vue'
import Component from 'vue-class-component'
import ProcessDefinitionApiGateway from './ProcessDefinition.api-gateway'
import ProcessDefinitionModel from './process-definition.model'

@Component({
  components: {}
})
export default class ProcessDefinitionComponent extends Vue {
  apiGateway: ProcessDefinitionApiGateway = new ProcessDefinitionApiGateway();

  entries: Array<ProcessDefinitionModel> = [];

  mounted () {
    this.apiGateway.query().subscribe((it) => {
      const { content } = it
      this.entries = content
    })
  }
}
