
info = localStorage.getItem("info")
if (!info) {
    info = {
        field: [{ type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "present", value: 1, opened: false }, { type: "present", value: 2, opened: false }, { type: "present", value: 3, opened: false }, { type: "present", value: 4, opened: false }, { type: "present", value: 5, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 40, opened: false }, { type: "bat", value: 40, opened: false }, { type: "bat", value: 40, opened: false }].sort(function () { return Math.random() - 0.5; }),
        shovels: 25,
        bats: 0,
        presents:[]
    }

    localStorage.setItem("info", JSON.stringify(info))
    info = localStorage.getItem("info")
}
info = JSON.parse(info)
document.querySelector(".shovel-counter").innerHTML = `Лопаты: ${info.shovels}`
document.querySelector(".bat-counter").innerHTML = `Мышки: ${info.bats}`



info.field.forEach((item, i) => {

    if (item.type == "bat") {
        document.querySelector(".game").innerHTML += `
        <div class="rune ${item.opened ? "active" : ""}">
            <img src="img/runes/${i + 1}.png" alt="" class="rune__img">
            <div class="rune__bat">
                <img src="img/icons/bat.png" alt="" class="rune__bat-img">
                <div class="bat-text">${item.value}</div>
            </div>
        </div>
        
        `
    } else {
        document.querySelector(".game").innerHTML += `
        <div class="rune ${item.opened ? "active" : ""}">
            <img src="img/runes/${i + 1}.png" alt="" class="rune__img">
            <div class="rune__present">
                <img src="img/runes/present.png" alt="" class="rune__present-img">
            </div>
        </div>
        `
    }
});

document.querySelectorAll(".rune").forEach((rune, i) => {
    rune.onclick = () => {
        rune.classList.add("active")

        let newField = info.field
        newField[i] = {
            ...newField[i],
            opened: true
        }

        let plusBats = 0
        if (info.field[i].type == "bat") {
            plusBats = info.field[i].value
        }

        info = {
            ...info,
            field: newField,
            shovels: info.shovels - 1,
            bats: info.bats + plusBats
        }

        document.querySelector(".shovel-counter").innerHTML = `Лопаты: ${info.shovels}`
        document.querySelector(".bat-counter").innerHTML = `Мышки: ${info.bats}`


        localStorage.setItem("info", JSON.stringify(info))
        rune.onclick = () => { }
    }
});







function reboot() {
    localStorage.clear()
    window.location.reload()
}