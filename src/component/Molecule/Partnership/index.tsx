import { Box } from "@mui/material";
import IntroCard from "@/component/Atom/IntroCard";
import PartnershipStageCard from "@/component/Atom/PartnershipStageCard";
import PartnershipValueCard from "@/component/Atom/PartnershipValueCard";
import content from "@/data/content.json";

export default function Partnership() {
  const { intro, stages } = content.partnership;

  return (
    <Box
      component="section"
      id="partnership"
      sx={{
        backgroundColor: "#faf9f6",
        px: { xs: 3, sm: 5, lg: 10 },
        py: { xs: 7, lg: 10 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" },
          gap: { xs: 4, md: 5 },
          alignItems: "center",
          mb: 4.5,
        }}
      >
        <IntroCard
          variant="stacked"
          {...intro}
          labelSx={{
            mb: 1,
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "1px",
            color: "#2451ff",
          }}
          titleSx={{
            maxWidth: "450px",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: { xs: "34px", sm: "42px", lg: "44px" },
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            color: "#080808",
          }}
          descriptionSx={{
            mt: 2,
            maxWidth: "460px",
            fontSize: "13px",
            lineHeight: 1.8,
            color: "#484848",
          }}
        />

        <PartnershipValueCard />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          border: "1px solid #e7e5e0",
        }}
      >
        {stages.map((stage) => (
          <PartnershipStageCard key={stage.number} stage={stage} />
        ))}
      </Box>
    </Box>
  );
}
