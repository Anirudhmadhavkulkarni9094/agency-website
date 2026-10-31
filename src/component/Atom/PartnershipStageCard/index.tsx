import { Box, Typography } from "@mui/material";
import content from "@/data/content.json";

type Stage = (typeof content.partnership.stages)[number];

export default function PartnershipStageCard({ stage }: { stage: Stage }) {
  return (
    <Box
      sx={{
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        p: { xs: 2, sm: 2.25 },
        borderRight: { xs: "none", md: "1px solid #e7e5e0" },
        borderBottom: { xs: "1px solid #e7e5e0", md: "none" },
        "&:last-child": { borderRight: "none", borderBottom: "none" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, mb: 1.5 }}>
        <Typography sx={{ fontSize: "9px", fontWeight: 600, color: "#2451ff" }}>
          {content.partnership.stagePrefix} {stage.number}
        </Typography>

        <Typography sx={{ fontSize: "8px", fontWeight: 600, letterSpacing: "0.7px", color: "#555" }}>
          {stage.period}
        </Typography>
      </Box>

      <Typography component="h3" sx={{ mb: 0.75, fontSize: "16px", fontWeight: 600, letterSpacing: "-0.4px", color: "#111" }}>
        {stage.title}
      </Typography>

      <Typography sx={{ fontSize: "10px", lineHeight: 1.65, color: "#555" }}>
        {stage.description}
      </Typography>

      <Box sx={{ mt: "auto", pt: 1.5 }}>
        <Box sx={{ borderTop: "1px solid #e7e5e0", pt: 1.25 }}>
          <Typography sx={{ fontSize: "9px", color: "#555" }}>
            → {stage.outcome}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
