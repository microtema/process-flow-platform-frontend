## Process-Flow Platform Frontend

# SPA app with Vuejs

# create docker image
`docker build -t microtema/process-flow-platform-frontend:0.1.0 .`

# run docker image
`docker run --name process-flow-platform-frontend -p 8081:8080 microtema/process-flow-platform-frontend:1.0.0`

# push docker image
`docker push microtema/process-flow-platform-frontend:1.0.0`

# Authentication and User Management 
> Okta has Authentication and User Management APIs that reduce development time with instant-on, 
> scalable user infrastructure. 
> Okta's intuitive API and expert support make it easy for developers to authenticate, 
> manage and secure users and roles in any application.

## Okta settingss

> Get started with our SDKs, documentation, and sample apps at developer.okta.com/docs.

Client ID:          0oa3h0mq2kwRxe9hO5d6 Issuer:             https://dev-1065782.okta.com/oauth2/default
Domain:             dev-1065782.okta.com Application name:   process-flow Application type:   SPA

# API Token

message-flow-api:   00mw6etKkg5WP4d8kTQIE7RzVb9AvuK938iiB3u8ND

# env

ISSUER=https://dev-1065782.okta.com/oauth2/default
CLIENT_ID=0oa3h0mq2kwRxe9hO5d6
