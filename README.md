# ⚡️ DPDC Bulk Bill Viewer ⚡️

## Description:

An app which will show bulk electricity bill from my local power distributor(DPDC)

## Motivation:

My apartment has 5 power meter for each unit which means every month i have to download 5 electricity bill copy from my local power distributor website.They also provide me a hard copy of the bill but again i have to manually calculate the total amount.That's why i build this app to scrape there site to view the bill and find the total amount.

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

## Special Thanks

This app is based on [Esau Silva's](https://esausilva.com/) [example-create-react-app-express](https://github.com/esausilva/example-create-react-app-express)

## Tutorial

Visit [Esau Silva's](https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/) blog to get step-by-step guide of how to make a node-express-react app in same directory
