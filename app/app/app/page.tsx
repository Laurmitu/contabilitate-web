export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL || "";
  let apiStatus = "necunoscut";

  try {
    const res = await fetch(`${api}/`, { cache: "no-store" });
    if (res.ok) {
      const j = await res.json();
      apiStatus = j?.status === "ok" ? "ok" : "răspuns neașteptat";
    } else {
      apiStatus = `eroare HTTP ${res.status}`;
    }
  } catch {
    apiStatus = "nu pot contacta API";
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F7F8FA", color: "#111827" }}>
      <div style={{ display: "flex" }}>
        <aside style={{
          width: 288, background: "#fff", borderRight: "1px solid #E5E7EB",
          minHeight: "100vh", padding: 16
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: 16, background: "#2563EB" }} />
            <div>
              <div style={{ fontWeight: 700 }}>ContaSuite</div>
              <div style={{ fontSize: 12, color: "#6B7280" }}>sidebar deschis • accent albastru</div>
            </div>
          </div>

          <div style={{ marginTop: 18, display: "grid", gap: 6 }}>
            {["Panou", "Documente", "Încasări/Plăți", "Stocuri", "Rapoarte", "Configurare", "Nomenclatoare", "Utilizatori"].map((t, i) => (
              <div key={t} style={{
                display: "flex", gap: 10, alignItems: "center",
                padding: "10px 12px", borderRadius: 14,
                background: i === 0 ? "#EFF6FF" : "transparent",
                border: i === 0 ? "1px solid #DBEAFE" : "1px solid transparent",
                color: i === 0 ? "#1D4ED8" : "#374151",
                cursor: "pointer"
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 12,
                  background: i === 0 ? "#BFDBFE" : "#F3F4F6"
                }} />
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, padding: 12, borderRadius: 16, background: "#F7F8FA" }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Firma activă</div>
            <select style={{ width: "100%", marginTop: 8, padding: 10, borderRadius: 12, border: "1px solid #E5E7EB" }}>
              <option>SILAI CEREAL COMPANY SRL</option>
              <option>ROSIPROD SRL</option>
              <option>OUAI DOLOSMANU</option>
            </select>
          </div>
        </aside>

        <main style={{ flex: 1 }}>
          <header style={{
            position: "sticky", top: 0, zIndex: 10,
            padding: "14px 18px",
            borderBottom: "1px solid #E5E7EB",
            background: "rgba(247,248,250,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex", justifyContent: "space-between", alignItems: "center"
          }}>
            <div style={{ color: "#6B7280", fontSize: 13 }}>API status: <b style={{ color: "#111827" }}>{apiStatus}</b></div>
            <button style={{
              background: "#2563EB", color: "white",
              border: 0, padding: "10px 14px",
              borderRadius: 14, fontWeight: 700, cursor: "pointer"
            }}>
              + Document nou
            </button>
          </header>

          <div style={{ padding: 18 }}>
            <div style={{
              display: "grid", gap: 12,
              gridTemplateColumns: "repeat(12, minmax(0, 1fr))"
            }}>
              {[
                { title: "Vânzări", span: 4 },
                { title: "Încasări restante", span: 5 },
                { title: "Cheltuieli", span: 3 },
                { title: "De plătit", span: 4 },
                { title: "Activitate", span: 5 },
                { title: "Cash & scadențe", span: 3 }
              ].map((c) => (
                <div key={c.title} style={{
                  gridColumn: `span ${c.span} / span ${c.span}`,
                  background: "white", border: "1px solid #E5E7EB",
                  borderRadius: 18, padding: 14,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
                }}>
                  <div style={{ fontSize: 13, fontWeight: 800 }}>{c.title}</div>
                  <div style={{ marginTop: 10, fontSize: 28, fontWeight: 800 }}>0</div>
                  <div style={{ marginTop: 4, fontSize: 12, color: "#6B7280" }}>demo widget</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
