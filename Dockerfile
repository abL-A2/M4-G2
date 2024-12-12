# base image for Node.js build stage
FROM node:20 AS node_modules_builder

# set working directory
WORKDIR /app

# copy only package.json and package-lock.json for dependencies
COPY package*.json ./

# install Node.js dependencies
RUN npm install

# base image for Deno
FROM denoland/deno:latest

# working directory, can be any name
WORKDIR /app

# copy Node.js modules from the previous stage
COPY --from=node_modules_builder /app/node_modules ./node_modules

# copy Deno project files
COPY . .

# env here 
ENV AI_MODEL_API_KEY=AIzaSyBgEG_u5U_ksaihV4OPTflMBrT0TK0m1_w

# build the Deno app - Deno's compatibility mode for Node.js dependencies
RUN deno task build

# expose port
EXPOSE 8000

# run
CMD ["deno", "task", "preview"]

# use deno's compatibility mode you intergalactic potato
# test before reattempt: `deno run --allow-net --allow-write --allow-run --allow-sys dev.ts`
# check .dockerignore
# push updates
# set up .env for docker?

# TO BUILD:
# docker build -t deno-node-app .
# TO RUN:
# docker run -p 8000:8000 deno-node-app