import telebot

bot = telebot.TeleBot("7509059758:AAGKUyP4ly53cJrH1LoSG6z4gZ0PLeid7Tk")


@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    bot.send_message(message.chat.id,str(message.chat.id))
bot.infinity_polling()




from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
# ВАЖНО: CORS разрешает вашему браузерному JS отправлять запросы на сервер Flask
# В производственной среде замените "*" на домен, с которого идет запрос.
CORS(app) 

# --- КОНФИГУРАЦИЯ TELEGRAM ---
# Замените на ваши реальные данные
BOT_TOKEN = '7509059758:AAGKUyP4ly53cJrH1LoSG6z4gZ0PLeid7Tk'
CHAT_ID = '940056063' # ID чата, куда бот будет отправлять сообщение (например, ваш личный чат)
# -----------------------------

def send_telegram_message(text):
    """Отправляет сообщение в Telegram, используя API бота."""
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        'chat_id': CHAT_ID,
        'text': text,
        'parse_mode': 'HTML'
    }
    
    try:
        response = requests.post(url, data=payload)
        response.raise_for_status() # Вызывает исключение для плохих статусов (4xx или 5xx)
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Ошибка при отправке в Telegram: {e}")
        return {"ok": False, "description": str(e)}

@app.route('/send-message', methods=['POST'])
def handle_message():
    """Принимает POST-запрос от JS, извлекает 'content' и отправляет его в Telegram."""
    if not request.is_json:
        return jsonify({"message": "Неверный формат запроса. Ожидается JSON."}), 400

    data = request.get_json()
    message_content = data.get('content')

    if not message_content:
        return jsonify({"message": "Отсутствует поле 'content'."}), 400

    # 1. Отправляем полученный текст в Telegram
    telegram_response = send_telegram_message(message_content)

    # 2. Отвечаем клиенту (JavaScript)
    if telegram_response.get("ok"):
        return jsonify({
            "message": "Сообщение принято и успешно отправлено в Telegram.",
            "telegram_status": "ok"
        }), 200
    else:
        return jsonify({
            "message": "Ошибка при отправке сообщения в Telegram.",
            "telegram_response": telegram_response
        }), 500

if __name__ == '__main__':
    # Запуск сервера Flask
    # '0.0.0.0' делает сервер доступным для внешних запросов
    # В режиме отладки (debug=True) сервер автоматически перезапускается при изменениях.
    app.run(host='127.0.0.1', port=5000, debug=True)