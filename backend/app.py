
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from pathlib import Path
from datetime import date, datetime

app = Flask(__name__)

# Allow requests from our local React development server.
CORS(app, resources={
    r"/api/*": {"origins": ["http://localhost:5173"]}
})

DATABASE = Path(__file__).with_name("gamer_leo.db")

PRICES = {
    "PC Gaming": 80,
    "Pro Gaming": 120,
    "Console Gaming": 150,
}


def get_db():
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    return connection


def init_db():
    with get_db() as connection:
        connection.execute("""
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                gaming_type TEXT NOT NULL,
                booking_date TEXT NOT NULL,
                start_time TEXT NOT NULL,
                hours INTEGER NOT NULL,
                total_price INTEGER NOT NULL,
                created_at TEXT NOT NULL
            )
        """)


@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "message": "Gamer Leo API is running"
    })


@app.post("/api/bookings")
def create_booking():
    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({"error": "Please send valid JSON."}), 400

    name = data.get("name")
    email = data.get("email")
    gaming_type = data.get("gamingType")
    booking_date = data.get("date")
    start_time = data.get("time")

    try:
        hours = int(data.get("hours"))
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid session duration."}), 400

    if not all(
        isinstance(value, str)
        for value in [name, email, gaming_type, booking_date, start_time]
    ):
        return jsonify({"error": "All fields are required."}), 400

    name = name.strip()
    email = email.strip()

    if not name or len(name) > 100:
        return jsonify({"error": "Enter a valid name."}), 400

    if len(email) > 254 or email.count("@") != 1:
        return jsonify({"error": "Enter a valid email address."}), 400

    if gaming_type not in PRICES:
        return jsonify({"error": "Invalid gaming type."}), 400

    if hours not in (1, 2, 3, 4):
        return jsonify({"error": "Choose 1 to 4 hours."}), 400

    try:
        selected_date = date.fromisoformat(booking_date)
        datetime.strptime(start_time, "%H:%M")
    except ValueError:
        return jsonify({"error": "Invalid date or start time."}), 400

    if selected_date < date.today():
        return jsonify({"error": "Booking date cannot be in the past."}), 400

    total_price = PRICES[gaming_type] * hours

    with get_db() as connection:
        cursor = connection.execute("""
            INSERT INTO bookings (
                name, email, gaming_type, booking_date,
                start_time, hours, total_price, created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            name,
            email,
            gaming_type,
            booking_date,
            start_time,
            hours,
            total_price,
            datetime.now().isoformat(timespec="seconds"),
        ))

        booking_id = cursor.lastrowid

    return jsonify({
        "message": "Booking request saved successfully.",
        "booking_id": booking_id,
        "total_price": total_price,
    }), 201


if __name__ == "__main__":
    init_db()
    app.run(debug=True, port=5000)
