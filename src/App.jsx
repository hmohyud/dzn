import './App.css';

function DznLogo() {
  return (
    <div className="dzn-logo">
      <span className="dzn-red">D</span>
      <span className="dzn-yellow">Z</span>
      <span className="dzn-blue">N</span>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      {/* Header */}
      <header className="header">
        <div className="container header-flex">
          <DznLogo />
          <nav className="nav">
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>Welcome to DZN</h1>
          <p className="tagline">
            Colorful resources and creative ideas for modern learners.
          </p>
          <a href="#shop" className="btn-primary">Shop Now</a>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <img src="https://placehold.co/250x350/ff3d2f/fff?text=Product+1" alt="Product 1" />
              <h3>Bright Ideas Notebook</h3>
              <p>$8.99</p>
              <button className="btn-secondary">View</button>
            </div>
            <div className="product-card">
              <img src="https://placehold.co/250x350/ffe800/333?text=Product+2" alt="Product 2" />
              <h3>Color Block Sketchpad</h3>
              <p>$6.50</p>
              <button className="btn-secondary">View</button>
            </div>
            <div className="product-card">
              <img src="https://placehold.co/250x350/2997ff/fff?text=Product+3" alt="Product 3" />
              <h3>Creative Pen Set</h3>
              <p>$5.25</p>
              <button className="btn-secondary">View</button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <h2>About DZN</h2>
          <p>
            DZN celebrates color, creativity, and learning. We bring you products that stand out and spark inspiration in everyday life.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DZN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
