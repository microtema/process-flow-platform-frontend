const ISSUER = 'https://dev-1065782.okta.com/oauth2/default'
const CLIENT_ID = '0oa3h0mq2kwRxe9hO5d6'

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: 'http://localhost:8080/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/rest/definition'
  }
}
