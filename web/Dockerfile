FROM node:12.22.12-bullseye-slim

COPY . /app
WORKDIR /app

RUN yarn global add serve@12
RUN yarn install --prod
RUN yarn run build

EXPOSE 5000

ENTRYPOINT [ "./serve.sh" ]
