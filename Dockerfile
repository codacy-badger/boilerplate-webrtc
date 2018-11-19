FROM node:carbon-alpine as builder



COPY . /app/
WORKDIR /app

RUN npm install \
	&& npm run build




FROM nginx:alpine

COPY --from=builder \
    /app/public \
    /usr/share/nginx/html
