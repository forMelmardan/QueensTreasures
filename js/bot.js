async function sendTelegramMessage(text) {
    let res = false
    await fetch("https://6d1f294a-14fa-441a-b812-67da83a85f2e-00-1cx2smbm43ipu.worf.replit.dev/send-message", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            content: text
        })
    }).then(r => {
        if (r.status == 200) {
            res = true
        }
    })
    if (res) {
        alert("Успешно!")
    } else {
        alert("Технические шоколадки.... Моя любовь, попробуй через пару минуток!!")
    }
    return res
}