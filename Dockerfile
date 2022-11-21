FROM node:alpine AS build
WORKDIR /app
ENV TZ="Asia/Shanghai"
COPY . .
RUN yarn && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
COPY --from=build /app/default.conf /etc/nginx/conf.d/







