import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('manifesto');

  return (
    <div className="app-container">
      <header>
        <div className="logo">
          Vishesh <span>Malhotra</span>
        </div>
        <nav>
          <ul>
            <li>
              <a 
                href="#" 
                className={activeTab === 'manifesto' ? 'active' : ''} 
                onClick={(e) => { e.preventDefault(); setActiveTab('manifesto'); }}
              >
                Manifesto
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeTab === 'architecture' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('architecture'); }}
              >
                Agentic Architecture
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={activeTab === 'cognition' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveTab('cognition'); }}
              >
                Cognition & RAG
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {activeTab === 'manifesto' && (
          <div className="hero animate">
            <div className="status-badge" style={{ marginBottom: '2rem', display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(201, 160, 91, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--accent-gold)' }}>
              SYSTEM STATUS: ONLINE
            </div>
            <h1>
              Moving from API wrappers to <br />
              <span>Organisational Cognition.</span>
            </h1>
            <p className="delay-1 animate">
              You asked for a PPT. I built a Software Factory instead. 
              This is my thesis on Agentic Architecture, System Design, and building defensible AI infrastructure.
            </p>
            <div className="delay-2 animate">
              <button 
                className="btn" 
                onClick={() => setActiveTab('architecture')}
              >
                Enter Architecture
              </button>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="section animate">
            <div className="section-header">
              <div className="section-line"></div>
              <div className="section-title">The Blueprint</div>
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Software Factory</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '4rem' }}>
              We don't write "slop" anymore. AI is treated as an execution engine constrained by strict architectural rules, context pipelines, and baseline infrastructure.
            </p>

            <div className="grid">
              <div className="card">
                <h3>01. The Harness</h3>
                <p>APIs (Bedrock, Anthropic) aren't UI tools. They require a systemic harness—abstracted gateways that handle rate limits, auth, and secure execution environments.</p>
              </div>
              <div className="card">
                <h3>02. Memory Management</h3>
                <p>Agents forget. We implement Episodic (past actions) and Procedural (expert workflows) memory layers to ensure context persists across sessions. Tacit's "real OS".</p>
              </div>
              <div className="card">
                <h3>03. Baseline Infra</h3>
                <p>Before features, we build the chassis. Dockerized environments, CI/CD pipelines, Zod validations. Secure-by-design isn't a feature, it's the foundation.</p>
              </div>
            </div>

            <div className="architecture-diagram animate delay-1">
              <div className="arch-layer">
                <h4>Layer 1: Orchestration</h4>
                <p>Cursor / AI-native IDEs feeding strict `.instructions.md` constraints to the LLM.</p>
              </div>
              <div className="arch-layer">
                <h4>Layer 2: Cognition (RAG & Vector DBs)</h4>
                <p>Dynamic context retrieval. Injecting company heuristics into the prompt window before execution.</p>
              </div>
              <div className="arch-layer">
                <h4>Layer 3: Execution</h4>
                <p>Sandboxed, validated code output pushed through standardized testing frameworks.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cognition' && (
          <div className="section animate">
            <div className="section-header">
              <div className="section-line"></div>
              <div className="section-title">Improving Intelligence</div>
            </div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Making Models Smarter</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '4rem' }}>
              Base models hallucinate. To build production-level agents, we have to inject ground truth and optimize inference.
            </p>

            <div className="grid">
               <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Retrieval-Augmented Gen (RAG)</h3>
                <p>We don't fine-tune for facts. We chunk organizational data, store it in Vector Databases, and retrieve exact context at runtime. Cheaper, faster, and highly accurate.</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>System Constraints</h3>
                <p>Using leaked system prompts (like Claude's) as case studies to understand how Anthropic controls alignment. We apply strict XML-tagged constraints to limit model drift.</p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-gold)' }}>Batching & Caching</h3>
                <p>Semantic caching of previous queries to save compute. Batching low-priority eval jobs. Intelligence optimization is also cost optimization.</p>
              </div>
            </div>

            <div className="terminal-box animate delay-1">
              <p>root@birchlogic-sys:~# tail -f /var/log/ai_agent.log</p>
              <p>[INFO] Starting query resolution...</p>
              <p style={{ color: '#aaa' }}>[WARN] Model lacks context. Fetching from VectorDB...</p>
              <p>[INFO] 4 relevant chunks retrieved. Injecting into harness.</p>
              <p>[INFO] Super-memory loaded: User prefers concise, secure code.</p>
              <p style={{ color: 'var(--accent-gold)' }}>[SUCCESS] Inference complete. No hallucinations detected.</p>
            </div>
          </div>
        )}
      </main>

      <footer>
        <div>Built for the Birchlogic Pitch.</div>
        <div>Vishesh Malhotra © 2026</div>
      </footer>
    </div>
  );
}

export default App;
