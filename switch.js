switch (new Date().getDay(4)) {
    case 2:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 0:
      console.log("Thursday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Saturday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
    default:
      console.log("not a funtions");
  }
  
  let day = 30;
  switch (day) {
    case (day > 14):
      console.log("true");
      break;
    case (day < 14):
      console.log("true2");
      break;
    case (day == 14):
      console.log("true4");
      break;
    case (day >= 14):
      console.log("true6");
      break;
      default:
          console.log("Your not function")
  }
  