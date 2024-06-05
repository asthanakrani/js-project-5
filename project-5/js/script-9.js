function printAnswer(x) {
    switch (x) {
      case "airplane":
        console.log(x[x.length - 6]);
        break;
      case "oxoxoxox":
        let result = "";
        for (let i = 0; i < x.length; i++) {
          if (i % 2 === 1) {
            result += x[i].toUpperCase();
          } else {
            result += x[i].toLowerCase();
          }
        }
        console.log(result);
        break;
      case "A New Java Book":
        console.log(x.toLowerCase());
        console.log(x.toUpperCase());
        break;
      default:
        console.log("Invalid input");
    }
  }
  
  printAnswer("airplane");
  printAnswer("oxoxoxox");
  printAnswer("A New Java Book");