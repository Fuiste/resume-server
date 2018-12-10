FROM node:10.14.1-alpine

WORKDIR /usr/src/app

# Install deps
COPY package*.json ./
RUN npm install

# Install source
COPY . .
RUN npm run build

# Run app
EXPOSE 8080
CMD ['npm', 'run', 'start']