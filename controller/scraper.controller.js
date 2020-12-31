const axios = require("axios");
const cheerio = require("cheerio");

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "send in the cavalry cause the server is burning (Unhandled Rejection  Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client) "
  );
  //reason.stack || reason
  //code will be updated when i have an error reporting service
});

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

async function getData(year, month, customer_no, res) {
  const container = [];
  try {
    for (let i = 0; i < customer_no.length; i++) {
      await axios
        .get(
          `https://dpdc.org.bd/service/ebill?btyp=current&year=${year}&month=${month}&cno=${customer_no[i]}&email=`
        )
        .then((response) => {
          //console.log(response.ok);
          const $ = cheerio.load(response.data);
          let name = $(
            "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > table:nth-child(3) > tbody > tr > td:nth-child(1) > div:nth-child(1)"
          );
          if (name.length) {
            name = name.text();
            const cno = $(
              "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > table:nth-child(3) > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2)"
            ).text();
            const meter_no = $(
              "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(6)"
            ).text();
            const unitRaw = $(
              "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > table:nth-child(5) > tbody > tr > td:nth-child(4) > span:nth-child(1)"
            ).text();

            const prevUnit = unitRaw.split("\n")[1].trim();
            const currUnit = unitRaw.split("\n")[2].trim();
            const unitConsume = unitRaw.split("\n")[3].trim();
            const amount = $(
              "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > table:nth-child(6) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(4)"
            ).text();
            const amount_with_fine = $(
              "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > table:nth-child(6) > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(4)"
            ).text();
            const data = {
              id: i + 1,
              Name: name,
              Customer_No: cno,
              Meter_No: meter_no,
              Previous_Unit: prevUnit,
              Current_Unit: currUnit,
              Unit_Consumtion: unitConsume,
              Amount: Number(amount),
              Amount_With_Fine: Number(amount_with_fine),
            };
            container.push(data);
          } else {
            throw $(
              "body > div:nth-child(6) > div > div.col-lg-9.col-md-9.col-sm-9 > div > h3"
            ).text();
          } //end of name check
        }) //end of then
        .catch((err) => {
          res.status(400).json({ msg: err });
        }); //end axios
      await sleep(5000); // wait for 5 seconds
    } //end of for loop
  } catch (error) {
    res.status(400).json({ msg: error });
  }
  return container;
}

const run = async function (req, res) {
  const year = req.query.year;
  const month = req.query.month;
  const customer_no = req.query.cno.split(",");
  //console.log({ year, month, customer_no });
  try {
    const data = await getData(year, month, customer_no, res);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { run };
