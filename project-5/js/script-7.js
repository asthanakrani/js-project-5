let numbers1 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
numbers1.sort((a, b) => a - b);
document.getElementById("mtp").innerHTML =(numbers1);

let numbers2 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
numbers2.sort((a, b) => b - a);
document.getElementById("mnt").innerHTML =(numbers2);