import { ImageResponse } from "next/og";

export const openGraphSize = { width: 1200, height: 630 };

type OpenGraphOptions = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function createOpenGraphImage({
  eyebrow,
  title,
  description,
}: OpenGraphOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #061a33 0%, #0b2f67 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 78px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#6fb2ff",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 750,
              letterSpacing: "-0.035em",
              lineHeight: 1.08,
              marginTop: 24,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                color: "#d4dfed",
                display: "flex",
                fontSize: 25,
                lineHeight: 1.35,
                marginTop: 28,
                maxWidth: 930,
              }}
            >
              {description}
            </div>
          ) : null}
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "2px solid rgba(111,178,255,.45)",
            display: "flex",
            fontSize: 24,
            fontWeight: 700,
            justifyContent: "space-between",
            paddingTop: 24,
          }}
        >
          <span>PROPERTY OPS STUDIO</span>
          <span style={{ color: "#9cb3cf", fontWeight: 500 }}>
            propertyopsstudio.com
          </span>
        </div>
      </div>
    ),
    openGraphSize,
  );
}
