
import './App.css'
import { useState } from 'react'

function App() {


  const [booking, setBooking] = useState({
    name: '',
    email: '',
    gamingType: 'PC Gaming',
    date: '',
    time: '10:00',
    hours: '1',
  })

  const [message, setMessage] = useState('')

  const prices = {
    'PC Gaming': 80,
    'Pro Gaming': 120,
    'Console Gaming': 150,
  }

  const totalPrice =
    prices[booking.gamingType] * Number(booking.hours)


  const [activeCategory, setActiveCategory] = useState('All')
  const [cartCount, setCartCount] = useState(0)

  const menuItems = [
    {
      name: 'Classic French Fries',
      category: 'Snacks',
      price: 99,
      emoji: '🍟',
      description: 'Golden, crispy fries with a seasoning sprinkle.',
      tag: 'GAMER FAVOURITE',
    },
    {
      name: 'Loaded Nachos',
      category: 'Snacks',
      price: 149,
      emoji: '🧀',
      description: 'Crunchy nachos loaded with cheese and salsa.',
      tag: 'CROWD PLEASER',
    },
    {
      name: 'Crispy Garlic Bread',
      category: 'Snacks',
      price: 119,
      emoji: '🥖',
      description: 'Toasted garlic bread with herbs and butter.',
      tag: 'CRUNCH TIME',
    },
    {
      name: 'Leo Smash Burger',
      category: 'Meals',
      price: 199,
      emoji: '🍔',
      description: 'A juicy burger layered with fresh vegetables.',
      tag: 'BEST SELLER',
    },
    {
      name: 'Loaded Club Sandwich',
      category: 'Meals',
      price: 179,
      emoji: '🥪',
      description: 'A filling toasted sandwich for long sessions.',
      tag: 'POWER MEAL',
    },
    {
      name: 'Pizza Slices',
      category: 'Meals',
      price: 159,
      emoji: '🍕',
      description: 'Cheesy pizza slices for your gaming break.',
      tag: 'SQUAD PICK',
    },
    {
      name: 'Iced Coffee',
      category: 'Drinks',
      price: 119,
      emoji: '🧋',
      description: 'Chilled coffee to keep you refreshed.',
      tag: 'COFFEE BREAK',
    },
    {
      name: 'Chocolate Shake',
      category: 'Drinks',
      price: 149,
      emoji: '🥤',
      description: 'A rich, creamy chocolate milkshake.',
      tag: 'SWEET BOOST',
    },
    {
      name: 'Lemon Cooler',
      category: 'Drinks',
      price: 89,
      emoji: '🍋',
      description: 'A refreshing citrus drink served cold.',
      tag: 'FRESH MODE',
    },
    {
      name: 'Chocolate Brownie',
      category: 'Desserts',
      price: 99,
      emoji: '🍫',
      description: 'A rich chocolate treat for your victory break.',
      tag: 'SWEET VICTORY',
    },
    {
      name: 'Ice Cream Sundae',
      category: 'Desserts',
      price: 129,
      emoji: '🍨',
      description: 'Creamy ice cream with chocolate topping.',
      tag: 'COOL DOWN',
    },
  ]

  const categories = ['All', 'Snacks', 'Meals', 'Drinks', 'Desserts']

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        )



  return (
    <div className="website">
      <nav className="navbar">
        <a href="#" className="logo">
          GAMER <span>LEO</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#gaming">Gaming</a>
          <a href="#pricing">Pricing</a>
          <a href="#cafe">Cafe Menu</a>
          <a href="#about">About</a>
        </div>

        <a href="#booking" className="nav-button">
          Book a Seat ↗
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="live-dot"></span>
              YOUR NEXT LEVEL STARTS HERE
            </p>

            <h1>
              PLAY HARD.
              <br />
              <span>CHILL HARDER.</span>
            </h1>

            <p className="hero-description">
              Your ultimate gaming destination.
              Powerful PCs, epic battles, delicious bites
              and unforgettable moments — all under one roof.
            </p>

            <div className="hero-buttons">
              <a href="#booking" className="primary-button">
                Book Your Session ↗
              </a>
              <a href="#gaming" className="secondary-button">
                Explore Gaming
              </a>
            </div>

            <div className="stats">
              <div>
                <strong>240<span>Hz</span></strong>
                <small>GAMING DISPLAYS</small>
              </div>
              <div>
                <strong>RTX <span>PCs</span></strong>
                <small>HIGH PERFORMANCE</small>
              </div>
              <div>
                <strong>GG<span>!</span></strong>
                <small>GOOD VIBES ONLY</small>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1100&q=85"
              alt="Gaming setup with computer screens"
            />
            <div className="floating-card">
              <span className="live-dot"></span>
              <div>
                <strong>READY PLAYER ONE?</strong>
                <small>Your squad is waiting.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="gaming">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CHOOSE YOUR BATTLEFIELD</p>
              <h2>LEVEL UP YOUR <span>GAME.</span></h2>
            </div>
            <p>From competitive ranked matches to casual gaming nights.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">⌘</div>
              <p className="card-number">01 / PC GAMING</p>
              <h3>PC ARENA</h3>
              <p>
                High-performance gaming PCs, smooth displays
                and the gear you need to dominate.
              </p>
              <a href="#booking">Explore stations ↗</a>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🎮</div>
              <p className="card-number">02 / CONSOLE GAMING</p>
              <h3>CONSOLE ZONE</h3>
              <p>
                Grab a controller, challenge your friends
                and make every match count.
              </p>
              <a href="#booking">Find your match ↗</a>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⚡</div>
              <p className="card-number">03 / GROUP PLAY</p>
              <h3>SQUAD UP</h3>
              <p>
                Bring your crew for multiplayer sessions,
                friendly tournaments and good times.
              </p>
              <a href="#booking">Play together ↗</a>
            </article>
          </div>
        </section>

        <section className="cafe-section" id="cafe">
          <div>
            <p className="eyebrow">FUEL YOUR NEXT WIN</p>
            <h2>GOOD GAMES.<br /><span>GREAT BITES.</span></h2>
            <p>
              Power through your sessions with refreshing
              drinks, crispy snacks and café favourites.
            </p>
            <a href="#menu" className="primary-button">
  Explore the Cafe ↗
</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&w=900&q=85"
            alt="Coffee and café food"
          />
        </section>


        <section className="menu-section" id="menu">
          <div className="menu-header">
            <div>
              <p className="eyebrow">FUEL YOUR NEXT VICTORY</p>
              <h2>
                THE LEO <span>MENU.</span>
              </h2>
              <p className="menu-subtitle">
                Big flavours. Epic sessions. Your favourite café treats.
              </p>
            </div>

            <div className="cart-indicator">
              <span>🛒</span>
              <div>
                <strong>{cartCount} items</strong>
                <small>In your demo cart</small>
              </div>
            </div>
          </div>

          <div className="menu-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? 'menu-tab active'
                    : 'menu-tab'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-card-art">
                  <span className="menu-emoji">{item.emoji}</span>
                  <span className="menu-tag">{item.tag}</span>
                </div>

                <div className="menu-card-content">
                  <span className="menu-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <div className="menu-card-bottom">
                    <strong className="menu-price">
                      ₹{item.price}
                    </strong>

                    <button
                      type="button"
                      className="add-menu-button"
                      onClick={() =>
                        setCartCount((count) => count + 1)
                      }
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="menu-disclaimer">
            Sample menu and prices for demonstration. Adding items
            currently updates only the demo cart count.
          </p>
        </section>

        
        <section className="booking-section" id="booking">
          <p className="eyebrow">RESERVE YOUR SPOT</p>
          <h2>BOOK YOUR <span>SESSION.</span></h2>
          <p>
            Choose your setup, select your time and get ready to play.
          </p>

          <form
            className="booking-form"
            
onSubmit={async (event) => {
  event.preventDefault()
  setMessage('Sending your booking request...')

  try {
    const response = await fetch('http://127.0.0.1:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Booking request failed.')
    }

    setMessage(
      `Booking request saved! Reference: ${data.booking_id}. Estimated total: ₹${data.total_price}.`
    )
  } catch (error) {
    setMessage(`Could not save booking: ${error.message}`)
  }
}}

          >
            <label>
              Your name
              <input
                type="text"
                placeholder="Enter your name"
                value={booking.name}
                onChange={(event) =>
                  setBooking({ ...booking, name: event.target.value })
                }
                required
              />
            </label>

            <label>
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                value={booking.email}
                onChange={(event) =>
                  setBooking({ ...booking, email: event.target.value })
                }
                required
              />
            </label>

            <label>
              Gaming type
              <select
                value={booking.gamingType}
                onChange={(event) =>
                  setBooking({ ...booking, gamingType: event.target.value })
                }
              >
                <option>PC Gaming</option>
                <option>Pro Gaming</option>
                <option>Console Gaming</option>
              </select>
            </label>

            <label>
              Booking date
              <input
                type="date"
                min={new Date().toLocaleDateString('en-CA')}
                value={booking.date}
                onChange={(event) =>
                  setBooking({ ...booking, date: event.target.value })
                }
                required
              />
            </label>

            <label>
              Start time
              <select
                value={booking.time}
                onChange={(event) =>
                  setBooking({ ...booking, time: event.target.value })
                }
              >
                <option value="10:00">10:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </label>

            <label>
              Session duration
              <select
                value={booking.hours}
                onChange={(event) =>
                  setBooking({ ...booking, hours: event.target.value })
                }
              >
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
              </select>
            </label>

            <div className="booking-total">
              <span>Estimated total</span>
              <strong>₹{totalPrice}</strong>
            </div>

            <button className="primary-button booking-submit" type="submit">
              Request Booking ↗
            </button>

            {message && <p className="booking-message">{message}</p>}
          </form>

          <small className="booking-disclaimer">
            Demo booking only. Your request is not yet saved to a server.
          </small>
        </section>

      </main>

      <footer className="footer" id="about">
        <a href="#home" className="logo">
          GAMER <span>LEO</span>
        </a>
        <p>GAME TOGETHER. STAY LEGENDARY.</p>
        <small>© {new Date().getFullYear()} Gamer Leo. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
