# Image to build from
FROM node:14-alpine3.12

# Create folder and set necessary permissions
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set working directory
WORKDIR /home/node/app

# Copy files
COPY package*.json ./

# Install pnpm
RUN npm -g install pnpm

# Run NPM install on package.json
RUN pnpm install --only=production

# Set user
USER node

# Copy with appropriate permissions
COPY --chown=node:node . .

# Run commands
CMD [ "node", "index.js" ]