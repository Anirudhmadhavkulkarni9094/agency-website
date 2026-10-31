import { Box, Typography } from "@mui/material";
import IntroCard from "@/component/Atom/IntroCard";
import StudioPrincipleRow from "@/component/Atom/StudioPrincipleRow";
import content from "@/data/content.json";

export default function AboutStudio() {
  const { intro, constitution, principles } = content.about;

  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f5f4f1",
        border: "1px solid #e7e5e0",
        px: { xs: 3, sm: 5, lg: 10 },
        py: { xs: 7, md: 9, lg: 10 },
      }}
    >
      <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "2px", backgroundColor: "#2875ff" }} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
          gap: { xs: 5, md: 6, lg: 8 },
          alignItems: "start",
        }}
      >
        <Box>
          <IntroCard
            variant="stacked"
            label={intro.label}
            title={intro.titleLines.join("\n")}
            description={intro.description}
            titleSx={{
              maxWidth: "390px",
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: { xs: "36px", sm: "46px", lg: "48px" },
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-1.8px",
              color: "#080808",
            }}
            descriptionSx={{
              mt: 2,
              maxWidth: "430px",
              fontSize: "13px",
              lineHeight: 1.8,
              color: "#484848",
            }}
          />
          <Box sx={{ mt: 2, p: 1.5, border: "1px solid #e7e5e0", backgroundColor: "#eeedea" }}>
            <Typography sx={{ mb: 0.75, fontSize: "9px", fontWeight: 600, color: "#222" }}>
              {constitution.title}
            </Typography>

            <Typography sx={{ fontSize: "10px", lineHeight: 1.7, color: "#555" }}>
              {constitution.description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ borderTop: "1px solid #e7e5e0" }}>
          {principles.map((principle) => (
            <StudioPrincipleRow key={principle.number} principle={principle} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
