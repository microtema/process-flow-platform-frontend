## git push -u origin main

# SPA app with Vuejs

# create docker image
`docker build -t microtema/process-flow-platform-frontend:0.1.0 .`

# run docker image
`docker run --name process-flow-platform-frontend -p 8081:8080 microtema/process-flow-platform-frontend:1.0.0`

# push docker image
`docker push microtema/process-flow-platform-frontend:1.0.0`
