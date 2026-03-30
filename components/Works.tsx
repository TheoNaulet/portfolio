"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./works-grid.css";

/* ─── Phone Mockup ─── */
function Phone({
  className,
  children,
  hideNotch,
}: {
  className?: string;
  children: React.ReactNode;
  hideNotch?: boolean;
}) {
  return (
    <div className={`wg-phone ${className ?? ""}`}>
      <div className="wg-phone-frame">
        {!hideNotch && <div className="wg-phone-notch" />}
        <div className="wg-phone-screen">{children}</div>
      </div>
    </div>
  );
}

/* ─── Screen: Travelyzer Map ─── */
function ScreenTravelyzerMap() {
  return (
    <div className="wg-screen-travelyzer-map">
      <div className="wg-map-area">
        <div className="wg-map-pin" style={{ top: "38%", left: "42%" }} />
        <div
          className="wg-map-pin"
          style={{
            top: "55%",
            left: "60%",
            background: "#e05cad",
            boxShadow: "0 0 10px #e05cad",
          }}
        />
        <div
          className="wg-map-pin"
          style={{
            top: "30%",
            left: "68%",
            background: "#a78bfa",
            boxShadow: "0 0 10px #a78bfa",
            width: 6,
            height: 6,
          }}
        />
        <div className="wg-map-route" />
      </div>
      <div className="wg-screen-bottom-bar">
        <div className="wg-mini-card">
          <div className="wg-mini-card-title">Sicile &middot; 7 jours</div>
          <div className="wg-mini-card-sub">
            3 villes &middot; 12 etapes planifiees
          </div>
        </div>
        <div className="wg-mini-tabs">
          <div className="wg-mini-tab wg-mini-tab--active" />
          <div className="wg-mini-tab" />
          <div className="wg-mini-tab" />
          <div className="wg-mini-tab" />
        </div>
      </div>
    </div>
  );
}

/* ─── Screen: Travelyzer Itinerary ─── */
function ScreenTravelyzerItin() {
  return (
    <div className="wg-screen-travelyzer-itin">
      <div className="wg-itin-header">Itineraire &middot; Sicile</div>
      {[
        { day: "Jour 1 \u00b7 Palerme", desc: "Cathedrale \u00b7 Marche de Ballaro \u00b7 Quattro Canti", color: undefined, showLine: true },
        { day: "Jour 2 \u00b7 Agrigente", desc: "Vallee des Temples \u00b7 Scala dei Turchi", color: "#a78bfa", showLine: true },
        { day: "Jour 3 \u00b7 Taormine", desc: "Teatro Greco \u00b7 Isola Bella", color: "#e05cad", showLine: false },
      ].map((item) => (
        <div className="wg-itin-day" key={item.day}>
          <div className="wg-itin-dot-col">
            <div
              className="wg-itin-dot"
              style={item.color ? { background: item.color } : undefined}
            />
            {item.showLine && <div className="wg-itin-line" />}
          </div>
          <div className="wg-itin-text">
            <strong>{item.day}</strong>
            {item.desc}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Screen: Socare Dashboard ─── */
function ScreenSocareDashboard() {
  return (
    <div className="wg-screen-socare">
      <div style={{ fontSize: 8, fontWeight: 700, color: "rgba(200,220,255,0.9)", marginBottom: 10 }}>
        Mon espace sante
      </div>
      <div className="wg-socare-row">
        <div className="wg-socare-tile">
          <div className="wg-socare-tile-label">Rembourse</div>
          <div className="wg-socare-tile-val">184&euro;</div>
        </div>
        <div className="wg-socare-tile">
          <div className="wg-socare-tile-label">En attente</div>
          <div className="wg-socare-tile-val" style={{ color: "rgba(255,200,100,0.8)" }}>
            42&euro;
          </div>
        </div>
      </div>
      <div className="wg-socare-bar-wrap">
        <div className="wg-socare-bar-label">Tiers payant actif</div>
        <div className="wg-socare-bar-track">
          <div className="wg-socare-bar-fill" style={{ width: "78%" }} />
        </div>
        <div className="wg-socare-bar-label">Mutuelle &middot; Carte vitale</div>
        <div className="wg-socare-bar-track">
          <div
            className="wg-socare-bar-fill"
            style={{ width: "100%", background: "rgba(59,108,247,0.4)" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Screen: Socare History ─── */
function ScreenSocareHistory() {
  return (
    <div className="wg-screen-socare">
      <div style={{ fontSize: 6, color: "rgba(100,160,255,0.4)", textTransform: "uppercase" as const, letterSpacing: 1, marginBottom: 6 }}>
        Historique
      </div>
      <div style={{ display: "flex", flexDirection: "column" as const, gap: 4 }}>
        <div style={{ background: "rgba(59,108,247,0.1)", borderRadius: 6, padding: "5px 7px", border: "1px solid rgba(59,108,247,0.15)" }}>
          <div style={{ fontSize: 6, color: "rgba(200,220,255,0.7)", fontWeight: 600 }}>Consultation &middot; Dr. Martin</div>
          <div style={{ fontSize: 5, color: "rgba(100,150,255,0.4)", marginTop: 1 }}>15 jan 2025 &middot; Rembourse</div>
        </div>
        <div style={{ background: "rgba(59,108,247,0.1)", borderRadius: 6, padding: "5px 7px", border: "1px solid rgba(59,108,247,0.15)" }}>
          <div style={{ fontSize: 6, color: "rgba(200,220,255,0.7)", fontWeight: 600 }}>Pharmacie &middot; Ordonnance</div>
          <div style={{ fontSize: 5, color: "rgba(100,150,255,0.4)", marginTop: 1 }}>3 jan 2025 &middot; En cours</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen: Cotezilla ─── */
function ScreenCotezilla() {
  return (
    <div className="wg-screen-cotezilla">
      <div className="wg-cote-badge">
        <div className="wg-cote-badge-dot" />
        <div className="wg-cote-badge-text">Value bets live</div>
      </div>
      {[
        { a: "PSG", b: "OM", odds: [{ v: "2.15", hot: true }, { v: "3.40", hot: false }, { v: "3.80", hot: false }] },
        { a: "Real", b: "Barca", odds: [{ v: "2.60", hot: false }, { v: "3.20", hot: true }, { v: "2.80", hot: false }] },
      ].map((m) => (
        <div className="wg-cote-match" key={m.a}>
          <div className="wg-cote-teams">
            <span className="wg-cote-team">{m.a}</span>
            <span className="wg-cote-vs">vs</span>
            <span className="wg-cote-team">{m.b}</span>
          </div>
          <div className="wg-cote-odds">
            {m.odds.map((o) => (
              <div key={o.v} className={`wg-cote-odd ${o.hot ? "wg-cote-odd--hot" : ""}`}>{o.v}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Screen: Cotezilla Dashboard ─── */
function ScreenCotezillaDashboard() {
  return (
    <div className="wg-screen-cotedash">
      {/* Sidebar */}
      <div className="wg-cotedash-sidebar">
        <div className="wg-cotedash-logo">CZ</div>
        <div className="wg-cotedash-sidebar-icons">
          {/* Dashboard */}
          <div className="wg-cotedash-icon wg-cotedash-icon--active">
            <svg viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
          </div>
          {/* Chart */}
          <div className="wg-cotedash-icon">
            <svg viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="9" width="3" height="6" rx="0.5"/><rect x="6" y="5" width="3" height="10" rx="0.5"/><rect x="11" y="2" width="3" height="13" rx="0.5"/></svg>
          </div>
          {/* Bot */}
          <div className="wg-cotedash-icon">
            <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="6" r="4"/><rect x="3" y="11" width="10" height="4" rx="2"/></svg>
          </div>
          {/* Settings */}
          <div className="wg-cotedash-icon">
            <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="2.5"/><path d="M8 1a1 1 0 011 1v1.07a4.5 4.5 0 011.76 1.02l.93-.53a1 1 0 011.37.37l.5.86a1 1 0 01-.37 1.37l-.93.53a4.5 4.5 0 010 2.04l.93.53a1 1 0 01.37 1.37l-.5.86a1 1 0 01-1.37.37l-.93-.53A4.5 4.5 0 019 12.93V14a1 1 0 01-2 0v-1.07a4.5 4.5 0 01-1.76-1.02l-.93.53a1 1 0 01-1.37-.37l-.5-.86a1 1 0 01.37-1.37l.93-.53a4.5 4.5 0 010-2.04l-.93-.53A1 1 0 013.44 4.3l.5-.86a1 1 0 011.37-.37l.93.53A4.5 4.5 0 017 2.58V2a1 1 0 011-1z" opacity="0.3"/></svg>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="wg-cotedash-main">
        <div className="wg-cotedash-topbar">
          <span className="wg-cotedash-topbar-title">Dashboard</span>
          <span className="wg-cotedash-topbar-live">&#9679; 24 live</span>
        </div>
        {/* Stats row */}
        <div className="wg-cotedash-row">
          <div className="wg-cotedash-stat">
            <div className="wg-cotedash-stat-val" style={{ color: "#4ade80" }}>+12.4%</div>
            <div className="wg-cotedash-stat-label">ROI 30j</div>
          </div>
          <div className="wg-cotedash-stat">
            <div className="wg-cotedash-stat-val">847</div>
            <div className="wg-cotedash-stat-label">Analyses</div>
          </div>
          <div className="wg-cotedash-stat">
            <div className="wg-cotedash-stat-val" style={{ color: "#facc15" }}>68%</div>
            <div className="wg-cotedash-stat-label">Win rate</div>
          </div>
        </div>
        {/* Chart area */}
        <div className="wg-cotedash-chart">
          <div className="wg-cotedash-chart-label">Profit 7j</div>
          <svg viewBox="0 0 180 50" className="wg-cotedash-chart-svg">
            <polyline
              points="0,40 20,35 40,38 60,28 80,30 100,18 120,22 140,12 160,15 180,8"
              fill="none"
              stroke="#facc15"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="0,40 20,35 40,38 60,28 80,30 100,18 120,22 140,12 160,15 180,8"
              fill="url(#cote-grad)"
              stroke="none"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="cote-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Live bets */}
        <div className="wg-cotedash-match">
          <div className="wg-cotedash-match-teams">
            <span>PSG vs OM</span>
            <span className="wg-cotedash-hot">2.15 HOT</span>
          </div>
        </div>
        <div className="wg-cotedash-match">
          <div className="wg-cotedash-match-teams">
            <span>Real vs Barca</span>
            <span className="wg-cotedash-hot">3.20 HOT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Screen: H2Air (video demo) ─── */
function ScreenH2Air() {
  return (
    <video
      src="/images/h2air-demo.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="wg-screen-video"
    />
  );
}

/* ─── Screen: Plated ─── */
function ScreenPlated() {
  const cars = [
    { icon: "\uD83C\uDFCE\uFE0F", name: "Ferrari 458", rarity: "epic", label: "Epique" },
    { icon: "\uD83D\uDE97", name: "Porsche GT3", rarity: "legendary", label: "Legendaire" },
    { icon: "\uD83D\uDE99", name: "Golf R", rarity: "rare", label: "Rare" },
    { icon: "\uD83D\uDE95", name: "308 GT", rarity: "common", label: "Commun" },
  ];
  return (
    <div className="wg-screen-plated">
      <div className="wg-plated-header">Collection</div>
      <div className="wg-plated-grid">
        {cars.map((c) => (
          <div className="wg-plated-car" key={c.name}>
            <div className="wg-plated-car-icon">{c.icon}</div>
            <div className="wg-plated-car-name">{c.name}</div>
            <div className={`wg-plated-rarity wg-rarity-${c.rarity}`}>{c.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Rotating Globe (real Earth texture) ─── */
function RotatingGlobe() {
  return (
    <div className="wg-globe">
      <div className="wg-globe-earth" />
      <div className="wg-globe-gloss" />
    </div>
  );
}

/* ─── MacBook Mockup ─── */
function MacBook({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`wg-macbook ${className ?? ""}`}>
      <div className="wg-macbook-lid">
        <div className="wg-macbook-screen">{children}</div>
        <div className="wg-macbook-camera" />
      </div>
      <div className="wg-macbook-base">
        <div className="wg-macbook-hinge" />
      </div>
    </div>
  );
}

/* ─── Screen: MAZ Website ─── */
function ScreenMazWebsite() {
  return (
    <div className="wg-screen-maz-web">
      <div className="wg-maz-nav">
        <div className="wg-maz-nav-logo">MAZ</div>
        <div className="wg-maz-nav-links">
          <span>Musique</span>
          <span>Bio</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="wg-maz-hero">
        <div className="wg-maz-hero-left">
          <div className="wg-maz-hero-eyebrow">Artiste &middot; Mediterranee</div>
          <div className="wg-maz-hero-title">
            Entre<br />deux<br /><em>rives.</em>
          </div>
          <div className="wg-maz-hero-sub">
            Pop mediterraneenne aux influences orientales et modernes.
          </div>
          <div className="wg-maz-hero-cta">Ecouter &rarr;</div>
        </div>
        <div className="wg-maz-hero-right">
          <div className="wg-maz-photo-placeholder" />
        </div>
      </div>
      <div className="wg-maz-geo" />
      <div className="wg-maz-geo-2" />
    </div>
  );
}

/* ─── Screen: Travelyzer Website (real screenshot) ─── */
function ScreenTravelyzerWeb() {
  return (
    <img
      src="/images/screen_travelyzer_web.png"
      alt="Travelyzer website"
      className="wg-screen-img"
    />
  );
}

/* ─── Arrow SVG ─── */
function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 13L13 3M13 3H6M13 3v7" />
    </svg>
  );
}

/* ─── Main Component ─── */
export default function Works() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(".wg-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wg-animate--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="works" ref={sectionRef} className="works-section">
      <div className="works-wrapper">
        {/* Header */}
        <div className="works-header wg-animate">
          <div className="works-title-block">
            <div className="works-label">WORKS</div>
            <span className="works-count">05</span>
          </div>
          <p className="works-header-desc">
            Au fil de ses experiences, Theo a eu l&apos;opportunite de travailler
            sur une grande variete de projets.
          </p>
        </div>

        {/* Grid */}
        <div className="works-grid">
          {/* 1. TRAVELYZER — large */}
          <Link
            href="/projects/travelyzer"
            className="wg-card wg-card--travelyzer wg-card--large wg-animate"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="wg-card-scene">
              <RotatingGlobe />
              <MacBook className="wg-macbook--travelyzer">
                <ScreenTravelyzerWeb />
              </MacBook>
              <Phone className="wg-phone--travelyzer-main" hideNotch>
                <img
                  src="/images/travelyzer_screens/mobile/Profile_mobile.PNG"
                  alt="Travelyzer Profile"
                  className="wg-screen-video"
                />
              </Phone>
              <span className="wg-badge wg-badge--app">App Mobile</span>
            </div>
            <div className="wg-card-info">
              <div>
                <div>
                  <span className="wg-card-name">Travelyzer</span>
                  <span className="wg-card-year">2025 — 2026</span>
                </div>
                <div className="wg-card-tags">
                  <span className="wg-tag">React Native</span>
                  <span className="wg-tag">Expo</span>
                  <span className="wg-tag">Mapbox</span>
                </div>
              </div>
              <span className="wg-card-link">
                Voir le projet <ArrowIcon />
              </span>
            </div>
          </Link>

          {/* 2. H2AIR — medium */}
          <Link
            href="/projects/h2air"
            className="wg-card wg-card--h2air wg-card--medium wg-animate"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="wg-card-scene">
              <Phone className="wg-phone--h2air-med" hideNotch>
                <ScreenH2Air />
              </Phone>
              <span className="wg-badge wg-badge--web">App Web</span>
            </div>
            <div className="wg-card-info">
              <div>
                <div>
                  <span className="wg-card-name">H2Air</span>
                  <span className="wg-card-year">2026</span>
                </div>
                <div className="wg-card-tags">
                  <span className="wg-tag">Next.js</span>
                  <span className="wg-tag">Hydrogene</span>
                </div>
              </div>
              <span className="wg-card-link">
                Voir le projet <ArrowIcon />
              </span>
            </div>
          </Link>

          {/* 3. SOCARE — small */}
          <Link
            href="/projects/socare"
            className="wg-card wg-card--socare wg-card--small wg-animate"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="wg-card-scene">
              <Phone className="wg-phone--socare-main wg-phone--socare-sm" hideNotch>
                <img
                  src="/images/sceen_socare.webp"
                  alt="Socare app"
                  className="wg-screen-video"
                />
              </Phone>
              <span className="wg-badge wg-badge--app">App Mobile</span>
            </div>
            <div className="wg-card-info">
              <div>
                <div>
                  <span className="wg-card-name">Socare</span>
                  <span className="wg-card-year">2024 — 2025</span>
                </div>
                <div className="wg-card-tags">
                  <span className="wg-tag">React Native</span>
                  <span className="wg-tag">Sante</span>
                </div>
              </div>
              <span className="wg-card-link">
                Voir le projet <ArrowIcon />
              </span>
            </div>
          </Link>

          {/* 4. MAZ — small */}
          <Link
            href="/projects/maz-musique"
            className="wg-card wg-card--maz wg-card--small wg-animate"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="wg-card-scene">
              <div className="wg-maz-scene-bg" />
              <MacBook className="wg-macbook--maz">
                <div className="wg-screen-wip">
                  <div className="wg-screen-wip-label">En cours de creation</div>
                </div>
              </MacBook>
              <span className="wg-badge wg-badge--brand">Branding</span>
            </div>
            <div className="wg-card-info">
              <div>
                <div>
                  <span className="wg-card-name" style={{ color: "#e8b080" }}>MAZ</span>
                  <span className="wg-card-year">2026</span>
                </div>
                <div className="wg-card-tags">
                  <span className="wg-tag">Web Design</span>
                  <span className="wg-tag">Branding</span>
                </div>
              </div>
              <span className="wg-card-link">
                Voir le projet <ArrowIcon />
              </span>
            </div>
          </Link>

          {/* 5. COTEZILLA — small */}
          <Link
            href="/projects/cotezilla"
            className="wg-card wg-card--cotezilla wg-card--small wg-animate"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="wg-card-scene">
              <MacBook className="wg-macbook--cotezilla">
                <ScreenCotezillaDashboard />
              </MacBook>
              <span className="wg-badge wg-badge--web">Bot IA</span>
            </div>
            <div className="wg-card-info">
              <div>
                <div>
                  <span className="wg-card-name">Cotezilla</span>
                  <span className="wg-card-year">2026</span>
                </div>
                <div className="wg-card-tags">
                  <span className="wg-tag">Paris sportifs</span>
                  <span className="wg-tag">IA</span>
                </div>
              </div>
              <span className="wg-card-link">
                Voir le projet <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
