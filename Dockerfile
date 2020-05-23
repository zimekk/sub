FROM node:10.18-slim AS dependencies
WORKDIR /app
ENV NODE_ENV development
ADD package.json webpack.config.js yarn.lock ./
RUN yarn
# RUN ls node_modules
# RUN ls node_modules/.bin
# RUN node_modules/.bin/nodemon -v

FROM dependencies as dev
# ADD src src
# VOLUME ["/app/src"]
# VOLUME ["/app"]
VOLUME ["/app/build", "/app/src"]
# CMD ["yarn", "start"]
# RUN pwd
# RUN yarn global add browserlist nodemon
RUN yarn global add webpack
# RUN ls -la node_modules/.bin
# RUN node_modules/.bin/nodemon -v
# CMD yarn build
CMD ["node_modules/.bin/webpack", "--output-path=build"]
# CMD ["nodemon", "src/server"]

FROM dependencies as build
ADD src src
# ENV REACT_APP_SIGNALING_SERVER https://chat.makarewicz.eu
RUN yarn build
# RUN ls -la node_modules/.bin
# CMD yarn webpack-dev-server --mode=production --inline=false --host 0.0.0.0

FROM node:10.18-slim
WORKDIR /app
ENV NODE_ENV production
ENV PORT 8080
RUN yarn global add serve
EXPOSE $PORT
# CMD yarn start
COPY --from=build /app/build build
# ENV PORT=3000
# #CMD ["node", "server"]
CMD serve -s build -l $PORT

# FROM node:10-slim AS dependencies
# ARG NODE_ENV=production
# ENV NODE_ENV=$NODE_ENV
# WORKDIR /app
# #RUN apt-get update && apt-get install -y tree && rm -rf /var/lib/apt/lists/*
# COPY package.json yarn.lock ./
# RUN set -ex; \
#   if [ "$NODE_ENV" = "production" ]; then \
#     yarn --no-cache --frozen-lockfile --production; \
#   else \
#     yarn --no-cache --frozen-lockfile; \
#   fi;

# FROM dependencies as dev
# VOLUME ["/app"]
# CMD ["yarn", "start"]

# FROM dependencies as build
# COPY public public
# COPY src src
# RUN yarn build

# FROM dependencies
# # COPY server server
# # COPY --from=build /app/build build
# RUN yarn global add serve
# COPY --from=build /app/build build
# ENV PORT=3000
# #CMD ["node", "server"]
# CMD serve -s build -l $PORT
