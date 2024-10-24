FROM node:12.22.12-bullseye-slim

COPY . /app
WORKDIR /app

ENV REACT_APP_MAPBOX_TOKEN=
ENV REACT_APP_API_URL=

RUN yarn global add serve@12
RUN yarn install
RUN yarn run build

EXPOSE 5000

ENTRYPOINT [ "./serve.sh" ]
