# FROM node:16-alpine3.16 as builder-ui
# ARG BUILD_MODE=development
# ARG BUILD_API_URL=http://localhost
# ARG BUILD_ASSET_URL=http://localhost

# WORKDIR /app
# COPY package.json ./
# RUN npx yarn install
# COPY . .
# ENV NUXT_NODE_ENV=$BUILD_MODE
# ENV NUXT_API_BASE_URL=$BUILD_API_URL
# ENV NUXT_APP_CDN_URL=$BUILD_ASSET_URL

# RUN npx nuxt build

# FROM node:16-alpine3.16
# WORKDIR /app
# ENV TZ=Asia/Jakarta

# RUN apk update
# RUN apk add --no-cache tzdata

# COPY --from=builder-ui ./app/.output ./
# EXPOSE 3000

# CMD [ "node", "server/index.mjs" ]
