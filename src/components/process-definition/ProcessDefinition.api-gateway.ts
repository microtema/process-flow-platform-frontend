import Axios from 'axios-observable'
import { map } from 'rxjs/operators'

export default class ProcessDefinitionApiGateway {
  http: Axios = Axios.create({
    baseURL: '/api/rest'
  });

  query () {
    return this.http.get('/definition').pipe(map((it) => it.data))
  }
}
