import { Box, Typography } from "@mui/material";
import content from "@/data/content.json";

export default function PartnershipValueCard() {
  const { value } = content.partnership;

  return (
    <Box sx={{ border: "1px solid #e7e5e0", backgroundColor: "#f5f4f1", p: { xs: 2.5, sm: 3 }, height: "100%" }}>
      <Typography sx={{ mb: 1, fontSize: "9px", fontWeight: 600, letterSpacing: "0.5px", color: "#333" }}>
        {value.label}
      </Typography>

      <Typography sx={{ fontSize: "12px", lineHeight: 1.8, color: "#333" }}>
        {value.description}
      </Typography>

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3, mt: 1.5, pt: 1.5, borderTop: "1px solid #e2e0dc" }}>
        {value.highlights.map((highlight) => (
          <Box key={highlight.title}>
            <Typography sx={{ fontSize: "10px", fontWeight: 600 }}>
              {highlight.title}
            </Typography>
            <Typography sx={{ fontSize: "10px", lineHeight: 1.6, color: "#555" }}>
              {highlight.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
