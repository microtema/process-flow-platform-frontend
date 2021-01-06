echo "deploy frontend to kubernetes"

npm run build

cd webserver && npm run build

cd .. && npm run deploy
