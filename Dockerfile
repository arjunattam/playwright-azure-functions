# To enable ssh & remote debugging on app service change the base image to the one below
# FROM mcr.microsoft.com/azure-functions/node:2.0-appservice
FROM mcr.microsoft.com/azure-functions/node:3.0.13113-node12

ENV AzureWebJobsScriptRoot=/home/site/wwwroot \
    AzureFunctionsJobHost__Logging__Console__IsEnabled=true

RUN uname -a

RUN node --version

# Base list from https://github.com/ahmelsayed/chrome-headless-func-test/blob/master/Dockerfile
RUN apt-get update && \
    apt-get install -y gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 \
    libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 \
    libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
    libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 \
    libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation \
    libappindicator1 libnss3 lsb-release xdg-utils wget \
    # For (newer) chromium
    libgbm1 \
    # For webkit
    libseccomp2 libxslt1.1 woff2 libevent-dev libopus0 libjpeg62-turbo-dev

COPY . /home/site/wwwroot

RUN cd /home/site/wwwroot && \
    npm install
