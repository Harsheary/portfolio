import { ImageResponse } from "next/og";

export const alt = "Harsh Eary — Software Engineer and Applied AI";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "center",
          background: "#050505",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            right: "-100px",
            top: "-160px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(34,211,238,0.28), rgba(79,70,229,0.08) 50%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            marginBottom: "36px",
            color: "#67e8f9",
            fontSize: "24px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Software Engineer · Applied AI
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: "940px",
            fontSize: "78px",
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            fontWeight: 700,
          }}
        >
          I turn complex workflows into dependable software.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "48px",
            fontSize: "28px",
            color: "#a3a3a3",
          }}
        >
          Harsh Eary
          <span style={{ margin: "0 16px", color: "#404040" }}>—</span>
          Toronto, Canada
        </div>
      </div>
    ),
    size,
  );
}
