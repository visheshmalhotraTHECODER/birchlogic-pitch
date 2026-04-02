import React, { useEffect } from 'react';
import './index.css';

function App() {
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / docHeight) * 100;
      document.getElementById('scroll-progress').style.width = `${progress}%`;

      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="story-container">
      <div className="scroll-progress" id="scroll-progress"></div>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="badge fade-in">The Thesis</div>
        <h1 className="hero-title fade-in">
          From AI Slop to <br />
          <span>Organisational Intelligence.</span>
        </h1>
        <p className="hero-subtitle fade-in" style={{ transitionDelay: '0.2s' }}>
          An immersive breakdown of the Birchlogic & Tacit Labs vision, the Software Factory model, and the engineer ready to build it.
        </p>
        <p className="fade-in" style={{ marginTop: '3rem', color: 'var(--accent-gold)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Scroll to Begin
        </p>
      </section>

      {/* The Birchlogic Vision */}
      <section>
        <div className="story-grid">
          <div className="content-block fade-in">
            <h2>The <span>Birchlogic</span> Architecture</h2>
            <p>We are shifting from API wrappers to true Agentic Architecture. It's not about querying an LLM anymore; it's about building secure-by-design infrastructure.</p>
            <p>From AWS Bedrock to Vector DBs and granular Access Controls, Birchlogic is architecting the very foundation where AI meets Enterprise Security.</p>
          </div>
          <div className="image-frame fade-in">
            {/* Replace src with Karan's actual photo in src/assets/karan.png */}
            <img src="/karan.png.png" alt="Karan Bhandari" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x450/111/d4af37?text=Karan+Bhandari' }} />
            <div className="image-caption">Karan Bhandari - Making cybersecurity practical</div>
          </div>
        </div>
      </section>

      {/* Tacit Labs and Super Memory */}
      <section>
        <div className="story-grid reversed">
          <div className="content-block fade-in">
            <h2>The <span>Tacit Labs</span> Solution</h2>
            <p>Two operating systems run every company. The official one, and the real one (the expert heuristics). Tacit captures the real one before it walks out the door.</p>
            <p>By building a 'Super Memory' through procedural and episodic context, we create the critical knowledge layer that stops AI from hallucinating and starts it reasoning.</p>
          </div>
          <div className="image-frame fade-in">
             {/* Replace src with Jaskaran's actual photo in src/assets/jaskaran.png */}
            <img src="/jaskaran.png.png" alt="Jaskaran Singh" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x450/111/d4af37?text=Jaskaran+Singh' }} />
            <div className="image-caption">Jaskaran Singh - Building Organisational Intelligence</div>
          </div>
        </div>
      </section>

      {/* The Software Factory Plan */}
      <section>
        <div className="content-block fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>My <span>Software Factory</span> Plan</h2>
          <p style={{ margin: '0 auto', maxWidth: '700px' }}>To execute this vision, we must move from raw prompting to rigorous engineering. Here is how I structure the pipeline.</p>
        </div>
        
        <div className="detailed-grid">
          <div className="detail-card fade-in">
            <div className="step-number">01</div>
            <h3>Constraint Layer</h3>
            <p>Using strict rules (.instructions.md) to constrain LLMs. No slop. Code adheres to baseline infrastructure standards before a single file is written.</p>
          </div>
          <div className="detail-card fade-in" style={{ transitionDelay: '0.1s' }}>
            <div className="step-number">02</div>
            <h3>RAG & Cognition</h3>
            <p>Integrating Vector DBs to fetch exact enterprise context. Instead of tuning massive models, we inject dynamic ground truth via the prompt harness.</p>
          </div>
          <div className="detail-card fade-in" style={{ transitionDelay: '0.2s' }}>
            <div className="step-number">03</div>
            <h3>Secure Pipelines</h3>
            <p>Automated QA, strict typing (Zod), modular separation of concerns. The factory line ensures no code ships without rigorous validation.</p>
          </div>
        </div>
      </section>

      {/* The Missing Piece: Vishesh */}
      <section>
        <div className="story-grid">
           <div className="image-frame fade-in">
             {/* Replace src with Vishesh's actual photo in src/assets/vishesh.png */}
            <img src="/vishesh.png.png" alt="Vishesh Malhotra" onError={(e) => { e.target.src = 'https://via.placeholder.com/600x450/111/d4af37?text=Vishesh+Malhotra' }} />
            <div className="image-caption">Vishesh Malhotra - The Builder</div>
          </div>
          <div className="content-block fade-in">
            <h2>The <span>Missing</span> Piece</h2>
            <p>I am not just looking for a role; I am looking to build real systems. A company mapping expert cognition and securing enterprise AI needs builders who think in architectures, not just syntax.</p>
            <p>I understand the problem. I understand the vision. Tell me where to start coding.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section fade-in">
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Ready to Build.</h2>
        <p style={{ color: 'var(--text-secondary)' }}>You don't need another generic coder. You need a systems engineer.</p>
        <button className="cta-button" onClick={() => window.open('https://linkedin.com/in/vishesh-malhotra1', '_blank')}>
          Hire Vishesh Now
        </button>
      </section>
    </div>
  );
}

export default App;
