# Image to build from
FROM node:14-alpine3.12

# Create folder and set necessary permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory
WORKDIR /home/node/app

# Copy files
COPY package*.json ./

# Set user
USER node

# Run NPM install on package.json
RUN npm install

# Copy with appropriate permissions
COPY --chown=node:node . .

CMD [ "node", "app.js" ]