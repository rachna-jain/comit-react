let weekdayNumber=prompt("enter number between 1 and 7:");
let message;
switch(Number(weekdayNumber)){
    case 1:
        //console.log("today is monday");
        message="Monday";
        break;
    case 2:
        //console.log("today is tuesday");
        message="Tuesday";
        break;
    case 3:
       // console.log("today is wednesday");
       message="Wednesday";
        break;
    case 4:
        //console.log("today is thursday");
        message="Thursday";
        break;
    case 5:
        //console.log("today is friday");
        message="Friday";
        break;
    case 6:
        //console.log("today is saturday");
        message="Saturday";
        break;
    case 7:
        //console.log("today is sunday");
        message="Sunday";
        break;
    default:
        //console.log(" u have entered wrong number");
        message="wrong number";
        break;
}
console.log(message);