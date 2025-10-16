
async function sendTelegramMessage(message) {
    const BOT_TOKEN = '7509059758:AAGKUyP4ly53cJrH1LoSG6z4gZ0PLeid7Tk';
    const CHAT_ID = '940056063';

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const payload = {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
    };

    try {
        const response = await fetch(TELEGRAM_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (data.ok) {
            alert("Успешно!!")
            return true
        } else {
            alert("Технические шоколадки.... Моя любовь, попробуй через пару минуток!!")
            return false
        }
    } catch (error) {
        alert("Технические шоколадки.... Моя любовь, попробуй через пару минуток!!")
        return false
    }
}