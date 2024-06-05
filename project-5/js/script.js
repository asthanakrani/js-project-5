let Color = ["Red", "Green", "White", "Black"];
console.log(Color);

document.getElementById("array").innerHTML =(Color.join(","));


document.getElementById("b").innerHTML =(Color.join("+"));


document.getElementById("c").innerHTML =(Color.slice(0, 3).join(","));


document.getElementById("d").innerHTML =(Color[0]);


document.getElementById("e").innerHTML =(Color.slice(1, 3).join(","));

let addColor = Color.slice(); 

    addColor.push('orange');

    document.getElementById("f").innerHTML =(addColor.join(','));