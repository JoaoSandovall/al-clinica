import { serif, globalData } from "../../data/content";

// Ícones SVG Oficiais das Redes Sociais
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export function Footer() {
  // Configuração dos links sociais (você pode colocar o link do instagram/facebook do cliente aqui nos '#')
  const socialLinks = [
    { name: "Instagram", url: "#", icon: <InstagramIcon /> },
    { name: "Facebook", url: "#", icon: <FacebookIcon /> },
    { name: "WhatsApp", url: globalData.clinica.contato.whatsappUrl, icon: <WhatsAppIcon /> },
  ];

  return (
    <footer style={{ background: "var(--c-primary)" }} className="pt-24 pb-10 px-6 md:px-10">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2">
            
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <img 
                src={globalData.clinica.logoUrl} 
                alt={`Logo ${globalData.clinica.nome}`} 
                className="h-10 md:h-12 w-auto object-contain shrink-0" 
              />
              <span style={{ ...serif, fontWeight: 400, fontSize: "1.2rem", letterSpacing: ".02em", color: "#FFFFFF" }}>
                {globalData.clinica.nome}
              </span>
            </div>
            
            <p style={{ color: "var(--c-text-muted)", fontSize: ".9rem", lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>
              {globalData.footer.sobre}
            </p>
            
            {/* Redes Sociais */}
            <div style={{ display: "flex", gap: 12, marginTop: "1.75rem" }}>
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--c-text-muted)", transition: "all .3s ease" }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = "var(--c-accent)"; 
                    e.currentTarget.style.color = "var(--c-accent)"; 
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; 
                    e.currentTarget.style.color = "var(--c-text-muted)"; 
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
          
          <div>
            <div style={{ fontSize: ".68rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>{globalData.footer.title_tratamentos}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {globalData.services.list.slice(0, 5).map((s) => (
                <li key={s.title} style={{ color: "var(--c-text-muted)", fontSize: ".9rem", cursor: "pointer", fontWeight: 300, transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")}>{s.title}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <div style={{ fontSize: ".68rem", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase", color: "#FFFFFF", marginBottom: "1.5rem" }}>{globalData.footer.title_contato}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", color: "var(--c-text-muted)", fontSize: ".9rem", fontWeight: 300 }}>
              <li>{globalData.clinica.endereco.edificio}</li>
              <li>{globalData.clinica.endereco.bairroCidade}</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")} >{globalData.clinica.contato.telefoneLabel}</li>
              <li style={{ cursor: "pointer", transition: "color .3s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--c-accent)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--c-text-muted)")} >{globalData.clinica.contato.emailLabel}</li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ color: "var(--c-text-muted)", fontSize: ".75rem", fontWeight: 300 }}>{globalData.footer.direitos}</p>
          <p style={{ color: "var(--c-text-muted)", fontSize: ".75rem", fontWeight: 300 }}>{globalData.footer.registro}</p>
        </div>
      </div>
    </footer>
  );
}