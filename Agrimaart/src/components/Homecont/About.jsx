import React from 'react';

const AboutOurProduct = () => {
  return (
    <>
      

      <section className="about-section">
        <div className="container">
          <h2>About Our Product</h2>
          <p>
            At AgroMart, we pride ourselves on providing the freshest, highest-quality organic produce and farming equipment. 
            Our products come directly from trusted local farmers and manufacturers, ensuring sustainability and excellence 
            in every item we deliver.
          </p>

          <div className="features" aria-label="Key product features">
            <div className="feature-item" tabIndex={0}>
              <span className="feature-icon" role="img" aria-label="Eco friendly">🌱</span>
              <strong>Eco-Friendly</strong>
              <p>Committed to sustainable farming practices.</p>
            </div>
            <div className="feature-item" tabIndex={0}>
              <span className="feature-icon" role="img" aria-label="Freshness guaranteed">🍅</span>
              <strong>Freshness Guaranteed</strong>
              <p>Directly sourced from local farmers every day.</p>
            </div>
            <div className="feature-item" tabIndex={0}>
              <span className="feature-icon" role="img" aria-label="Wide variety">🛒</span>
              <strong>Wide Variety</strong>
              <p>Farming equipment & organic produce under one roof.</p>
            </div>
            <div className="feature-item" tabIndex={0}>
              <span className="feature-icon" role="img" aria-label="Trusted quality">✔️</span>
              <strong>Trusted Quality</strong>
              <p>Certified and tested products for peace of mind.</p>
            </div>
          </div>

          <button className="cta-button" onClick={() => alert('Explore Products coming soon!')}>
            Explore Our Products
          </button>

         
        </div>
      </section>
    </>
  );
};

export default AboutOurProduct;
