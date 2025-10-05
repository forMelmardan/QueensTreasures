
levels = localStorage.getItem("levels")
if (!levels){
    levels = [[
        {type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},
        {type:"present",value:1,opened:false}
    ].sort(function(){return Math.random() - 0.5;}),
    [
        {type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:8,opened:false},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false0},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},{type:"bat",value:1,opened:false5},
        {type:"present",value:2,opened:false}
    ].sort(function(){return Math.random() - 0.5;}),
    ].sort(function(){return Math.random() - 0.5;})
    
    localStorage.setItem("levels",JSON.stringify(levels))
}
levels = JSON.parse(levels)



levels[0].forEach

levels[0].forEach((item,i) => {
    
    if (item.type == "bat"){
        document.querySelector(".game").innerHTML += `
        <div class="rune ${item.opened?"actuve":""}">
            <img src="img/runes/${i+1}.png" alt="" class="rune__img">
            <div class="rune__bat">
                <img src="img/icons/bat.png" alt="" class="rune__bat-img">
                <div class="bat-text">${item.value}</div>
            </div>
        </div>
        
        `
    }else{
        document.querySelector(".game").innerHTML += `
        <div class="rune ${item.opened?"actuve":""}">
            <img src="img/runes/${i+1}.png" alt="" class="rune__img">
            <div class="rune__present">
                <img src="img/runes/present.png" alt="" class="rune__present-img">
            </div>
        </div>
        `
    }
});

document.querySelectorAll(".rune").forEach((rune,i) => {
    rune.onclick = ()=>{
        rune.classList.add("active")
        console.log(levels[0][i].opened);
        levels[0][i].opened = true
        
        localStorage.setItem("levels",JSON.stringify(levels))
        rune.onclick = ()=>{}
    }
});