FROM nginx 

WORKDIR /usr/local/app

COPY ./dist .

COPY ./default.conf /etc/nginx/conf.d/default.conf
