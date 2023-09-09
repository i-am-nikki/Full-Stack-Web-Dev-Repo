const figlet = require("figlet");

//copied the below code from
//https://www.npmjs.com/package/figlet
figlet("NIKKI MALIK", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);  
  });