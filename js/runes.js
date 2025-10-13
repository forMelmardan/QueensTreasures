
info = localStorage.getItem("info")
if (!info) {
    info = {
        field: [{ type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "present", value: 1, opened: false }, { type: "present", value: 2, opened: false }, { type: "present", value: 3, opened: false }, { type: "present", value: 4, opened: false }, { type: "present", value: 5, opened: false }, { type: "present", value: 6, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 40, opened: false }, { type: "bat", value: 40, opened: false }].sort(function () { return Math.random() - 0.5; }),
        shovels: 25,
        bats: 0,
        presents: []
    }

    localStorage.setItem("info", JSON.stringify(info))
    info = localStorage.getItem("info")
}
info = JSON.parse(info)
document.querySelector(".shovel-counter").innerHTML = `Лопаты: ${info.shovels}`
document.querySelector(".bat-counter").innerHTML = `Мышки: ${info.bats}`

const presents = [
    {
        value: 1,
        name: "Колечко",
        description: "Надеюсь тебе нравится кольцо!! Мне кажется, тебе по вайбу будет очень круто подходить! И цвет такой тебе тоже очень идет!",
        picture: "ring",
        cake: "красный",
        runes: [1, 2, 3],
        rightRune: 2
    },
    {
        value: 2,
        name: "Флешка",
        description: "Честно, не самая вайбовая штука, но в любом случае полезная и лишней не будет!! А еще её можно будет подключить к телефону!",
        picture: "flash",
        cake: "розовый",
        runes: [4, 5, 6],
        rightRune: 3
    },
    {
        value: 3,
        name: "Пирог",
        description: "Ты говорила, что тебе очень нравятся штуки с жидким шоколадом внутри, вот попробовал испечь, надеюсь будет вкусно!",
        picture: "cake",
        cake: "коричневый",
        runes: [7, 8, 9],
        rightRune: 2
    },
    {
        value: 4,
        name: "Лампа",
        description: "Специально на аккумуляторе, чтобы было удобно использовать в общаге, можно будет сидеть читать!!",
        picture: "lamp",
        cake: "белый",
        runes: [10, 11, 12],
        rightRune: 3
    },
    {
        value: 5,
        name: "Шарф",
        description: "Такой вот шарфик, цвет мне кажется очень-очень тебе подходит, а еще он будет очень круто смотреться с пальто! И пусть даже скоро в пальто будет прохладно, с шубой этот шарф будет не менее крутым!",
        picture: "scarf",
        cake: "оранжевый",
        runes: [13, 14, 15],
        rightRune: 1
    },
    {
        value: 6,
        name: "Корсет",
        description: "Помнится, ты скидывала мне картинку, с вайбом который хочешь создавать, и там был именно такой корсет, я хочу тебе помогать выглядеть так, как хочешь!",
        picture: "corset",
        cake: "черный",
        runes: [16, 17, 18],
        rightRune: 1
    },
]




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
    window.scrollTo({top:0, left:0,behavior:"smooth"})

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