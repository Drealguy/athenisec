import { ImageResponse } from "next/og";

export const alt = "Athenisec — Cybersecurity compliance for regulated SMBs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#002881",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
          Athenisec
        </div>
        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.85, maxWidth: 900 }}>
          Cybersecurity compliance for SMBs in regulated industries
        </div>
        <div style={{ fontSize: 28, marginTop: 48, opacity: 0.65 }}>
          SOC 2 · HIPAA · ISO 27001 · PCI DSS · GDPR · CMMC 2
        </div>
      </div>
    ),
    size,
  );
}
