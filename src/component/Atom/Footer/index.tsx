
"use client"
import { useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import content from "@/data/content.json";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setYear(new Date().getFullYear());
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#faf9f6",
        px: {
          xs: 3,
          sm: 5,
          lg: 10,
        },
        pt: {
          xs: 7,
          lg: 8,
        },
        pb: 3,
      }}
    >
      {/* Main Footer */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "1.5fr 0.7fr 0.7fr 0.7fr",
          },
          gap: {
            xs: 4,
            md: 3,
          },
          pb: 6,
        }}
      >
        {/* Studio Identity */}
        <Box
          sx={{
            gridColumn: {
              xs: "1 / -1",
              md: "auto",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
              mb: 1.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                backgroundColor: "#080808",
              }}
            />

            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "-0.3px",
              }}
            >
              {content.footer.brand}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: {
                xs: "38px",
                sm: "43px",
              },
              fontStyle: "italic",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-1.5px",
              color: "#080808",
            }}
          >
            {content.footer.headline.map((line, index) => (
              <span key={line}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </Typography>

          {/* Inquiries */}
          <Box sx={{ mt: 4 }}>
            <Typography
              sx={{
                mb: 0.5,
                fontSize: "8px",
                fontWeight: 600,
                letterSpacing: "0.8px",
                color: "#444",
              }}
            >
              {content.footer.inquiriesLabel}
            </Typography>

            <Link
              href={`mailto:${content.footer.email}`}
              underline="always"
              sx={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#111",
                textUnderlineOffset: "3px",
                "&:hover": {
                  color: "#2451ff",
                },
              }}
            >
              {content.footer.email}
            </Link>
          </Box>
        </Box>

        {/* Navigation Groups */}
        {content.footer.groups.map((group) => (
          <Box key={group.number}>
            <Typography
              sx={{
                mb: 2,
                fontSize: "8px",
                fontWeight: 600,
                letterSpacing: "0.8px",
                color: "#444",
              }}
            >
              {group.number} / {group.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.1,
              }}
            >
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                  underline="none"
                  sx={{
                    width: "fit-content",
                    fontSize: "10px",
                    fontWeight: 400,
                    color: "#292929",
                    transition: "color 150ms ease",
                    "&:hover": {
                      color: "#2451ff",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>

            {group.location && (
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "9px",
                  color: "#777",
                }}
              >
                {group.location}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Bottom Footer */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: 2,
          pt: 2.5,
          borderTop: "1px solid #e6e4df",
        }}
      >
        <Typography
          sx={{
            fontSize: "9px",
            color: "#555",
            letterSpacing: "0.2px",
          }}
        >
          © {year ?? ""} {content.footer.brand}. {content.footer.copyrightSuffix}
        </Typography>

        <Typography
          sx={{
            fontSize: "9px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            color: "#555",
          }}
        >
          {content.footer.studioTagline}
        </Typography>
      </Box>
    </Box>
  );
}
