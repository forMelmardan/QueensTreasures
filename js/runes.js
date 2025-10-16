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
                <img src="img/presents/${presents[item.value - 1].picture}.png" alt="" class="rune__present-img">
            </div>
        </div>
        `
        if (item.opened) {
            if (document.querySelector(".presents__container") == undefined) { document.querySelector(".presents").innerHTML = `<h2>Подарки</h2><div class="presents__container"></div>` }
            let newPresent = document.createElement("div")
            newPresent.classList.add("present")
            newPresent.classList.add("unread")
            newPresent.id = `present${info.field[i].value}`
            newPresent.innerHTML = `<img src="img/presents/${presents[info.field[i].value - 1].picture}.png" alt="" class="present__img">`
            newPresent.onclick = (e) => {
                e.currentTarget.classList.remove("unread")
                getPresent(presents.find(v => v.value == e.currentTarget.id.split("").splice(7, 8)[0]))
            }
            document.querySelector(".presents__container").appendChild(newPresent)


        }
    }
});

document.querySelectorAll(".present").forEach(present => {

    present.onclick = (e) => {
        if (e.currentTarget.classList.contains("unread")) { e.currentTarget.classList.remove("unread") }

        console.log(e.target);
        console.log(e.currentTarget.id);
        console.log(presents.find(v => v.value == e.currentTarget.id.split("").splice(7, 8)[0]));

        getPresent(presents.find(v => v.value == e.currentTarget.id.split("").splice(7, 8)[0]))
    }
});

function getPresent(present) {
    modal = document.createElement("div")
    modal.classList.add("modal")
    modal_runes = ``
    present.runes.forEach((rune, i) => {
        modal_runes += `<img ${i + 1 == present.rightRune ? 'id="rightRune"' : ""} src="img/runes/${rune}.png" alt="">`
    });

    modal.innerHTML =
        `
        <div class="modal__background"></div >
                <div class="modal__content">
                <h3>Открой ${present.cake} кусочек торта, получи подарок, а затем выбери найденный символ!</h3>
                    <div class="modal__variants">
                        ${modal_runes}
                        </div>
                        </div>
                        `
    document.querySelector("main").appendChild(modal)

    document.querySelector("#rightRune").onclick = () => {
        document.querySelector(".modal__content").innerHTML += `
                                <h2>${present.name}</h2>
                                <p class="present__text">${present.description}</p>
                            `
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

    document.querySelector(".modal__background").onclick = () => {
        document.querySelector(".modal").remove()
    }
}






document.querySelectorAll(".rune").forEach((rune, i) => {
    if (!rune.classList.contains("active")) {
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
            } else {
                if (document.querySelector(".presents__container") == undefined) { document.querySelector(".presents").innerHTML = `<h2>Подарки</h2><div class="presents__container"></div>` }
                let newPresent = document.createElement("div")
                newPresent.classList.add("present")
                newPresent.classList.add("unread")
                newPresent.id = `present${info.field[i].value}`
                newPresent.innerHTML = `<img src="img/presents/${presents[info.field[i].value - 1].picture}.png" alt="" class="present__img">`
                newPresent.onclick = (e) => {
                    e.currentTarget.classList.remove("unread")
                    getPresent(presents.find(v => v.value == e.currentTarget.id.split("").splice(7, 8)[0]))
                }
                document.querySelector(".presents__container").appendChild(newPresent)


            }

            info = {
                ...info,
                field: newField,
                shovels: info.shovels - 1,
                bats: info.bats + plusBats
            }

            document.querySelector(".shovel-counter").innerHTML = `Лопаты: ${info.shovels} `
            document.querySelector(".bat-counter").innerHTML = `Мышки: ${info.bats} `


            localStorage.setItem("info", JSON.stringify(info))
            rune.onclick = () => { }
        }
    }
});





function reboot() {
    localStorage.clear()
    window.location.reload()
}