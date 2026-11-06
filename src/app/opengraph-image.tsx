import { ImageResponse } from "next/og";

export const alt = "Webcrafty.tech — Good work. Built to last.";
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#faf9f6",
          color: "#080808",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#2451ff",
            }}
          />
          WEBCRAFTY.TECH
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "76px",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-4px",
            }}
          >
            Good work.
            <br />
            Built to last.
          </div>
          <div
            style={{
              marginTop: "24px",
              fontSize: "24px",
              color: "#494949",
            }}
          >
            Website design, development, and digital products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e6e4df",
            paddingTop: "20px",
            fontSize: "16px",
            letterSpacing: "1px",
          }}
        >
          <span>INDEPENDENT DIGITAL ENGINEERING STUDIO</span>
          <span>DESIGN · DEVELOPMENT · AUTOMATION</span>
        </div>
      </div>
    ),
    size,
  );
}
