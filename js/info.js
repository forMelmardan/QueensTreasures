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
        description: "Флешка это вообще полезная в хозяйстве вещь, презентации уже потихоньку начались и вот чтобы было удобнее в целом с любой учебной информацией!!",
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
        runes: [13, 23, 15],
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




info = localStorage.getItem("info")
if (!info) {
    info = {
        field: [{ type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "bat", value: 5, opened: false }, { type: "present", value: 1, opened: false }, { type: "present", value: 2, opened: false }, { type: "present", value: 3, opened: false }, { type: "present", value: 4, opened: false }, { type: "present", value: 5, opened: false }, { type: "present", value: 6, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 10, opened: false }, { type: "bat", value: 40, opened: false }, { type: "bat", value: 40, opened: false }].sort(function () { return Math.random() - 0.5; }),
        shovels: 25,
        bats: 0,
        dishes: [
            {
                name: "Сырный суп",
                id: 1,
                bought: false,
            },
            {
                name: "Шоколадный пирог",
                id: 2,
                bought: false,
            },
            {
                name: "Жареная курица",
                id: 3,
                bought: false,
            },
            {
                name: "Блюдо на выбор",
                id: 4,
                bought: false,
            },
        ],
        presents: []
    }

    localStorage.setItem("info", JSON.stringify(info))
    info = localStorage.getItem("info")
}
info = JSON.parse(info)