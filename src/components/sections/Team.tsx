import { Section } from "../ui/Section";
import { serif, team } from "../../data/content";

export function Team() {
  return (
    <Section id="equipe">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
            <span className="eyebrow">Especialistas</span>
          </div>
          <h2
            className="reveal"
            style={{ ...serif, fontWeight: 400, fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)", color: "#1A1A18" }}
          >
            Quem cuida do seu sorriso
          </h2>
        </div>
        <div
          className="stagger-children"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.75rem" }}
        >
          {team.map((dr) => (
            <div key={dr.name} className="reveal" style={{ cursor: "pointer" }}>
              <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: "1.1rem", position: "relative" }}>
                <img
                  src={dr.img}
                  alt={dr.name}
                  style={{ width: "100%", height: 340, objectFit: "cover", display: "block", filter: "brightness(.96) saturate(.85)", transition: "transform .5s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,24,.5) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 18 }}>
                  <span style={{ fontSize: ".62rem", color: "rgba(253,252,250,.72)", letterSpacing: ".15em", textTransform: "uppercase" }}>{dr.cro}</span>
                </div>
              </div>
              <div style={{ ...serif, fontWeight: 500, fontSize: "1.15rem", color: "#1A1A18" }}>{dr.name}</div>
              <div style={{ fontSize: ".875rem", color: "#8A97A5", marginTop: 3, fontWeight: 300 }}>{dr.specialty}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}