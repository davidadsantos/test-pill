FROM node:lts-alpine3.18

ARG STACK

RUN apk update && \
    apk add --no-cache git && \
    npm install -g pnpm

RUN npm install -g typescript

RUN mkdir -p /var/www/$STACK


COPY ./$STACK/ /var/www/$STACK
COPY ./.docker/$STACK/entrypoint /var/www

RUN chmod +x /var/www/entrypoint

WORKDIR /var/www/$STACK

EXPOSE 80

CMD ["sh", "-c", "/var/www/entrypoint"]