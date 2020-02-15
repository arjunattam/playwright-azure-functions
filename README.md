# Playwright on Azure Functions

Working reference example for running [Playwright](https://github.com/microsoft/playwright/) scripts on Azure Functions. Supports Chromium, WebKit and Firefox. Tested with Playwright v0.11.1.

```
https://az-functions-pw-test.azurewebsites.net/api/HttpExample?browser=webkit
```

## Usage

This example currently requires a Linux premium plan on Azure Functions. The project was bootstrapped with [this tutorial](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-function-linux-custom-image?tabs=portal%2Cbash&pivots=programming-language-javascript).

The project sets up a basic HTTP trigger function which returns a screenshot of a web page in the browser of your choice.

### Running locally

* Clone the repo and run `npm install`
* Build the docker image with `docker build .`
* Run the docker container with `docker run -p 8080:80 <container-id>`
* Open `localhost:8080/api/HttpExample` and pass the browser as a query parameter `?browser=webkit`

### Deploy

Once the pieces work locally, deploy them to Azure by following the steps in [this tutorial](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-function-linux-custom-image?tabs=portal%2Cbash&pivots=programming-language-javascript). Broadly speaking, these steps will be:

* Create a resource group, storage account and premium plan on your Azure subscription
* Push the Docker image to Docker Hub
* Create a function with an HTTP trigger, pointed at the Docker image

## Usage with a single browser

It is also possible to use this example for a single browser (instead of 3). To do this

* Use a different NPM package: `playwright-chromium`, `playwright-firefox`, or `playwright-webkit` instead of `playwright`
* Optionally, modify the Dockerfile to remove browser-specific changes
* Update the `index.js` to require the correct NPM package

## Contributing

Does this example not work for your needs? File an issue so we can make it work better. Thank you!