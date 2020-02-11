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
* Create a function
* Push the docker image
