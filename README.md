# Playwright on Azure Functions

Working reference example for running Playwright on Azure Functions.

## Usage

This example currently requires a Linux premium plan on Azure Functions.

The scripts returns a screenshot of a domain of your choice.

### Run locally

* Clone the repo and run `npm install`
* Build the docker image
* Run the docker container
* Open localhost:8080/api/HttpExample

### Deploy

https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-function-linux-custom-image?tabs=portal%2Cbash&pivots=programming-language-javascript

* Create a resource group, storage account, premium plan
* Create a function with an HTTP trigger
* Push the docker image

## Known issues

### WebKit

```
info: Host.Function.Console[0]
      /home/site/wwwroot/node_modules/playwright-core/.local-webkit/linux-1127/minibrowser-wpe/MiniBrowser: error while loading shared libraries: libjpeg.so.8: cannot open shared object file: No such file or directory
```
