import { Box, Typography } from "@mui/material";
import content from "@/data/content.json";

type StudioPrinciple = (typeof content.about.principles)[number];

export default function StudioPrincipleRow({ principle }: { principle: StudioPrinciple }) {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 1, py: 1.5, borderBottom: "1px solid #e7e5e0" }}>
      <Typography sx={{ pt: 0.25, fontSize: "10px", fontWeight: 500, color: "#2451ff" }}>
        {principle.number}
      </Typography>

      <Box>
        <Typography
          component="h3"
          sx={{
            mb: 0.5,
            fontSize: { xs: "15px", sm: "16px" },
            fontWeight: 500,
            letterSpacing: "-0.3px",
            lineHeight: 1.4,
            color: "#111",
          }}
        >
          {principle.title}
        </Typography>

        <Typography sx={{ maxWidth: "600px", fontSize: "10px", lineHeight: 1.7, color: "#555" }}>
          {principle.description}
        </Typography>
      </Box>
    </Box>
  );
}
