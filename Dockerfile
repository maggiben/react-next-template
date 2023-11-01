FROM registry.gitlab.com/fravega-it/arquitectura/docker-node:16.13.0 as build

ARG CI_JOB_TOKEN

WORKDIR /usr/app

COPY package*.json  ./

RUN echo -e "\\n\\n@fravega-it:registry=https://gitlab.com/api/v4/packages/npm/\\n//gitlab.com/api/v4/packages/npm/:_authToken=${CI_JOB_TOKEN}" >> .npmrc

RUN npm ci

COPY . .

RUN npm run build

####

FROM registry.gitlab.com/fravega-it/arquitectura/docker-node:16.13.0

WORKDIR /usr/app

COPY --from=build /usr/app/.next/ ./.next
COPY --from=build /usr/app/public/ ./public/
COPY --from=build /usr/app/node_modules/ ./node_modules/
COPY --from=build /usr/app/package.json ./

EXPOSE 3000

CMD ["npm", "start"]
