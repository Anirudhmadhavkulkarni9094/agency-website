import { Box } from "@mui/material";
import IntroCard from "@/component/Atom/IntroCard";
import EngagementCard from "@/component/Atom/EngagementCard";
import content from "@/data/content.json";

export default function EngagementModels() {
  const { intro, models } = content.engagement;

  return (
    <Box
      component="section"
      id="engagement"
      sx={{
        backgroundColor: "#faf9f6",
        px: { xs: 3, sm: 5, lg: 10 },
        py: { xs: 7, lg: 10 },
      }}
    >
      <Box sx={{ mb: 5 }}>
        <IntroCard
          variant="split"
          {...intro}
          splitColumns={{ xs: "1fr", sm: "1.2fr 0.8fr" }}
          titleSx={{
            maxWidth: 550,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: { xs: "36px", sm: "42px", lg: "44px" },
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            color: "#080808",
          }}
          descriptionSx={{
            maxWidth: 370,
            justifySelf: { xs: "start", sm: "end" },
            fontSize: "11px",
            lineHeight: 1.8,
            color: "#555",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          gap: 2.25,
          alignItems: "stretch",
        }}
      >
        {models.map((model) => (
          <EngagementCard key={model.number} model={model} />
        ))}
      </Box>
    </Box>
  );
}
