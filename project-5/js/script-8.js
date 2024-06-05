let word = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let filteredWords = word.filter(word => word.length >= 8);

document.getElementById("fiter").innerHTML =(filteredWords);