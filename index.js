//index.js
const http = require("http");
const AppData = require("./controller");

const PORT = process.env.PORT || 5006;

const server = http.createServer(async (req, res) => {
        // / : GET 
    if (req.url === "/" && req.method === "GET") {
        // set the status code, and content-type
           res.writeHead(200, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*" });
           res.end(JSON.stringify({
            "message": "App is active! 🚀",
            "status": "success"
        }));
       }
    // /api/v1 : GET
    else if (req.url === "/v1/list" && req.method === "GET") {
        // get the data.
        const allData = await new AppData().getAllData();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" });
        // send the data
        res.end(JSON.stringify(allData));
    }
    //
          // /api/v1/today : GET
          else if (req.url === "/v1/today" &&
          req.method === "GET") {
                 // get today data.
                const todayData = await new AppData().getTodayData();
                // set the status code, and content-type
                res.writeHead(200, { "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"  });
                // send the data
                res.end(JSON.stringify(todayData));
            }
            //
// /api/v1/month : GET
else if (req.url === "/v1/month" &&
req.method === "GET") {
       // get holiday data.
      const holidayData = await new AppData().getHolidayData();
      // set the status code, and content-type
      res.writeHead(200, { "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"  });
      // send the data
      res.end(JSON.stringify(holidayData));
  }
  //
 // /v1/date/:MMDDYY : GET
 else if (req.url.match(/\/v1\/date\/([0-9]+)/) &&
 req.method === "GET") {
       try {
           // get date 10272022 from url
           const X = req.url.split("/")[3];
           // get a single data
           const singleData = await new AppData().getSingleData(X);
           // set the status code and content-type
           res.writeHead(200, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"  });
           // send the data
           res.end(JSON.stringify(singleData));
       } catch (error) {
           // set the status code and content-type
           res.writeHead(404, { "Content-Type": "application/json",
           "Access-Control-Allow-Origin": "*"  });
           // send the error
           res.end(JSON.stringify({ message: error }));
       }
   }
// Add above

    // No route present
    else {
        res.writeHead(404, { "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"  });
        res.end(JSON.stringify({ message: "Route not found 💣" }));
    }
});


server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});

// I will add credit or inspiration later.
// Avoid a single error from crashing the server in production.
process.on("uncaughtException", (...args) => console.error(args));
process.on("unhandledRejection", (...args) => console.error(args));