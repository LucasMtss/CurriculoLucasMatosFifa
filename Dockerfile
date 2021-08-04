FROM node:latest as build

LABEL maintainer="Smarti9 <devops@smarti9.com.br>"
WORKDIR /usr/app
# RUN npm install -g npm@7.11.2

COPY ./package*.json ./
#RUN npm install
RUN yarn
COPY . ./

RUN npm run build
RUN ls -lha
EXPOSE 3000

ENV NODE_ENV=production


FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
