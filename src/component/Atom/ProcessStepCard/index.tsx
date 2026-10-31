import { Box, Typography } from "@mui/material";
import content from "@/data/content.json";

type ProcessStep = (typeof content.process.steps)[number];

export default function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <Box
      sx={{
        minWidth: 0,
        px: { xs: 0, sm: 2, lg: 2.5 },
        py: { xs: 2.5, md: 0 },
        borderLeft: { xs: "none", sm: "1px solid #e7e5e0" },
        borderTop: { xs: "1px solid #e7e5e0", sm: "none" },
        "&:first-of-type": { borderLeft: "none", pl: 0 },
        "&:last-of-type": { pr: 0 },
      }}
    >
      <Typography component="p" sx={{ mb: 1, fontSize: "9px", fontWeight: 500, letterSpacing: "0.3px", color: "#2451ff" }}>
        {content.process.stepPrefix} {step.number}
      </Typography>

      <Typography
        component="h3"
        sx={{ mb: 0.5, fontSize: "16px", fontWeight: 600, letterSpacing: "-0.4px", lineHeight: 1.3, color: "#111" }}
      >
        {step.title}
      </Typography>

      <Typography component="p" sx={{ fontSize: "10px", fontWeight: 400, lineHeight: 1.7, color: "#555" }}>
        {step.description}
      </Typography>
    </Box>
  );
}
