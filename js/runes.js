

levels = [[
    {type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},
    {type:"present",value:1}
].sort(function(){return Math.random() - 0.5;}),
[
    {type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:8},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:10},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},{type:"bat",value:15},
    {type:"present",value:2}
].sort(function(){return Math.random() - 0.5;}),
].sort(function(){return Math.random() - 0.5;})


console.log(levels);


for (let i = 0; i < 25; i++) {
    document.querySelector(".game").innerHTML += `
    <img src="img/runes/${i+1}.png" alt="" class="rune">
    
    `
}