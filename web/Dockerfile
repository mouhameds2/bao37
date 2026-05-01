FROM node:20-alpine AS build

WORKDIR /app

# copie tout le projet (apps + racine)
COPY .. .

# aller dans web
WORKDIR /app/web

RUN npm install
RUN npm run build

# image nginx
FROM nginx:alpine

# IMPORTANT : chemin correct du build
COPY --from=build /app/dist/apps/web /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]