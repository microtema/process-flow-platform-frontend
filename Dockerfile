FROM node

WORKDIR /app/webserver

COPY dist /app/dist
COPY webserver /app/webserver

EXPOSE 4200

USER 1001

CMD ["npm", "start"]
