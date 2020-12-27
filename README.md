# ⚡️ DPDC Bulk Bill Viewer ⚡️

## Description:

An app which will show bulk electricity bill from my local power distributor(DPDC)

## Motivation:

My apartment has 5 electric meter and for each meter a bill is produce by my local power distributor([DPDC](https://dpdc.org.bd/)).Each month i have to download 5 bill copies from DPDC site.Even though DPDC provide me a hard copy for each bill i have to manually calculate the total bill amount.Because i am super lazy and have some medicore programming knowledge i build this app to make this process automated.

## Installation

First clone this repository.

```bash
git clone https://github.com/mirsahib/DPDC-Bulk-Bill-Viewer.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```bash
yarn
cd client
yarn
```

After successfull installation run

```bash
yarn dev
```

## How to reuse this project according to your need

You need to know [cheerio](https://cheerio.js.org/) before you can start editing the scrapper function

Goto `controllers/scraper.controller.js` and edit the file according to your need

## API

Base url : http://localhost:8888/

| URL        | Parameter                                        | Response                                                                                                                                                                | Description                           |
| ---------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `/scraper` | <ul><li>cno</li><li>year</li><li>month</li></ul> | <ul><li>Name</li><li>Customer No</li><li>Meter No</li><li>Previous unit</li><li>Current Unit</li><li>Unit Consumption</li><li>Amount</li><li>Amount with fine</li></ul> | **cno** is a list of customer number, |

Example: http://localhost:5000/scraper?cno=customer_no_1,customer_no_2&year=2020&month=10

NB: Use [Postman](https://www.postman.com/) to test the api

## Serverless API

Comming soon

## Future Development

I want to scrape [DSCC](http://www.dscc.gov.bd/) (Corporation tax),[Titas](https://www.titasgas.org.bd/) (Gas distributor),[Wasa](http://dwasa.org.bd/) (Water And Sewage Authtority ),[NBR](http://nbr.gov.bd/) (Income tax) to make a complete Unitily manager for Dhaka's citizen.

## Contribution

If you want to **contribute** and make this project much better for other developer have a look at [Issues](https://github.com/mirsahib/DPDC-Bulk-Bill-Viewer/issues).

If you created something awesome and want to contribute then feel free to open a [pull request](https://github.com/mirsahib/DPDC-Bulk-Bill-Viewer/pulls).

## Challenges for future development

- DSCC has a customer portal which has a login system,at the moment of writing this document i don't know how to perform form submission using cheerio (this might not be possible with cheerio,have to use puppeteer or other scraping framework)
- Titas has a customer portal but i need a customer code to register to there portal which will be provided upon making a call to there helpline 16496,at the moment of writting this document nobody is picking up my call.Way to go digital Bangladesh
- WASA has a customer portal
- NBR need more research

## Special Thanks

This app is based on [Esau Silva's](https://esausilva.com/) [example-create-react-app-express](https://github.com/esausilva/example-create-react-app-express)

## Tutorial

Visit [Esau Silva's](https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/) blog to get step-by-step guide of how to make a node-express-react app in same directory
