# The-Countries-Datatbase-Api
The Countries Datatbase Api (TCD Api)

General Usage
-------------

_All of our API calls return a JSON response. No authentication required_  

_This example uses fetch, a modern built-in way to make HTTP requests with JavaScript._

  ```
  fetch(".../v1/today")
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  ```
  
  

Method: GET: [https://the-countries-datatbase-api.vercel.app](https://the-countries-datatbase-api.vercel.app)

✅ Get today celebration

👉 [https://the-countries-datatbase-api.vercel.app/v1/today](https://the-countries-datatbase-api.vercel.app/v1/today)

✅ Get This month celebration

👉 [https://the-countries-datatbase-api.vercel.app/v1/month](https://the-countries-datatbase-api.vercel.app/v1/month)

✅ Get this year celebration

👉 [https://the-countries-datatbase-api.vercel.app/v1/list](https://the-countries-datatbase-api.vercel.app/v1/list)
