import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Yoga & Strength in ${site.area}`;
export const size = { width: 1200, height: 630 };
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
          background: "#FBF9F5",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C27D60",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            {site.area}
          </div>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              color: "#212B24",
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#4A5D4E",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {`${site.byline} · Free trial class`}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "system-ui, sans-serif",
            fontSize: 24,
            color: "#78867B",
          }}
        >
          <span>Online and In-Person</span>
          <span style={{ color: "#212B24", fontWeight: 600 }}>
            Book on WhatsApp
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
