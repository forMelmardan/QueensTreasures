info.dishes.forEach(dish => {
    document.querySelector(".shop__container").innerHTML += `<div class="shop__item ${dish.bought ? "bought" : ""}">
                    <img src="img/dishes/${dish.id}.png" alt="" class="shop__item-img">
                    <h4 class="shop__item-title">${dish.name}</h4>
                    
                </div>`
});




document.querySelectorAll(".shop__item").forEach((item, index) => {
    item.onclick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        modal = document.createElement("div")
        modal.classList.add("modal")
        document.querySelector("main").appendChild(modal)

        if (item.querySelector("h4").textContent != "Блюдо на выбор") {

            modal.innerHTML =
                `
            <div class="modal__background"></div >
                    <div class="modal__content">
                        <h3>Точно хочешь купить ${item.querySelector("h4").textContent} за 50 мышек?</h3>
                        <div class="modal__choice">
                            <div class="modal__button" id="no">Нет</div>
                            <div class="modal__button" id="yes">Да</div>
                        </div>
                    </div>
                            `
            document.querySelector("#yes").onclick = () => {
                if (info.bats >= 50) {
                    sendTelegramMessage(`Моя дорогая девочка заказала ${item.querySelector("h4").textContent}! Мышек осталось: ${info.bats - 50}`).then(r => {
                        console.log(r);
                        
                        if (r){
                            item.classList.add("bought")
                            let newDishes = info.dishes
                            newDishes[index] = {
                                ...newDishes[index],
                                bought: true
                            }
                            info = {
                                ...info,
                                bats: info.bats - 50,
                                dishes: newDishes
                            }
                            localStorage.setItem("info", JSON.stringify(info))
    
                            document.querySelector(".bat-counter").innerHTML = `Мышки: ${info.bats} `
                            document.querySelector(".modal").remove()
                        }

                    })

                } else {
                    alert("Недостаточно мышек!!")
                }
            }
        } else {
            modal.innerHTML =
                `
            <div class="modal__background"></div >
                    <div class="modal__content">
                        <h3>Введи название блюда, которое хочешь получить! (50 мышек)</h3>
                        <input type="text" class="modal__input">
                        <div class="modal__choice">
                            <div class="modal__button" id="no">Отмена</div>
                            <div class="modal__button" id="yes">Отправить</div>
                        </div>
                    </div>
                            `
            document.querySelector("#yes").onclick = () => {
                if (info.bats >= 50) {
                    if (document.querySelector(".modal__input").value) {
                        content = document.querySelector(".modal__input").value
                        sendTelegramMessage(`Моя дорогая девочка заказала ${content}! Мышек осталось: ${info.bats - 50}`).then(r => {
                            if (r) {
                                item.classList.add("bought")
                                let newDishes = info.dishes
                                newDishes[index] = {
                                    ...newDishes[index],
                                    bought: true
                                }
                                info = {
                                    ...info,
                                    bats: info.bats - 50,
                                    dishes: newDishes
                                }
                                localStorage.setItem("info", JSON.stringify(info))
                                document.querySelector(".bat-counter").innerHTML = `Мышки: ${info.bats} `


                                document.querySelector(".modal").remove()
                            }
                        })
                    } else {
                        alert("Дорогая, введи название блюда, пожалуйста")
                    }
                } else {
                    alert("Недостаточно мышек!!")
                }
            }
        }
        document.querySelector(".modal__background").onclick = () => {
            document.querySelector(".modal").remove()
        }
        document.querySelector("#no").onclick = () => {
            document.querySelector(".modal").remove()
        }
    }


});