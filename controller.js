// Logic behind the functionalities
//import jstz from 'jstz';
var jstz = require('jstz');
const timezone = jstz.determine();
var localTime = jstz.determine().name();
//console.log(localTime);
//var serverTime = "Africa/Abidjan";

// current datetime string in America/Chicago timezone
let local_datetime_str = new Date().toLocaleString("en-US", { timeZone: localTime });

// create new Date object
//let date_local = new Date(local_datetime_str);
let d = new Date(local_datetime_str);
//let d = new Date();

// Months
let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthTxt = allMonths[d.getMonth()];  // May
console.log(monthTxt);

// year as (YYYY) format
let year = d.getFullYear();

// month as (MM) format
let month = ("0" + (d.getMonth() + 1)).slice(-2);

// date as (DD) format
let date = ("0" + d.getDate()).slice(-2);

// date time in YYYY-MM-DD format
//let date_time = year + "-" + month + "-" + date;
//let today = month + "/" + date + "/" + year; // "11/13/2022"
//let today = month + "/" + date ; // "11/13"
let today = date + "/" + month ; // "11/13"
console.log(today);

const data = require("./ApiData");
//console.log(data);

class Controller {
  // getting all data
  async getAllData() {
    // return all data
    return new Promise((resolve, _) => resolve(data));
    
  }
// 
  // getting today data
  async getTodayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let todayData = data.filter(function(todayIn) {
    return todayIn.date_of_holiday == today; });
    //console.log(todayData);
//
      if (todayData) {
        // return the data
        resolve(todayData);
      } else {
        // return an error
        reject(`Today object not found `);
      }
    });
  }
  // getting a single data
  async getSingleData(X) {
    return new Promise((resolve, reject) => {
      // get the data
      let singleData = data.find((Y) => Y.date_num === X);

      if (singleData) {
        // return the data
        resolve(singleData);
      } else {
        // return an error
        reject(`Object with id ${X} not found `);
      }
    });
  }
//
 // getting holiday data
 async getHolidayData() {
    return new Promise((resolve, reject) => {
      // get the data
	  let holidayData = data.filter(function(holidayIn) {
    return holidayIn.month_of_event == monthTxt; });
    //console.log(holidayData);
//
      if (holidayData) {
        // return the data
        resolve(holidayData);
      } else {
        // return an error
        reject(`Holiday object not found `);
      }
    });
  }
  // add below
  // add above
}
module.exports = Controller;