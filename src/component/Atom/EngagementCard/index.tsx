import CheckIcon from "@mui/icons-material/Check";
import { Box, Button, Typography } from "@mui/material";
import content from "@/data/content.json";

type EngagementModel = (typeof content.engagement.models)[number];

export default function EngagementCard({ model }: { model: EngagementModel }) {
  const featured = Boolean(model.featured);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        p: { xs: 2, sm: 2.25 },
        border: featured ? "2px solid #111" : "1px solid #e7e5e0",
        backgroundColor: "#faf9f6",
        boxShadow: featured ? "0 3px 8px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 200ms ease",
        "&:hover": { boxShadow: "0 5px 16px rgba(0,0,0,0.07)" },
      }}
    >
      {featured && (
        <Box sx={{ position: "absolute", top: -9, left: 16, px: 1.25, py: 0.35, backgroundColor: "#080808" }}>
          <Typography sx={{ color: "#fff", fontSize: "8px", fontWeight: 600, letterSpacing: "0.5px" }}>
            {content.engagement.featuredBadge}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          mb: 1.25,
          mt: featured ? 0.5 : 0,
        }}
      >
        <Typography sx={{ fontSize: "9px", fontWeight: 500, color: featured ? "#2451ff" : "#555" }}>
          {content.engagement.modelPrefix} {model.number}
        </Typography>

        <Box sx={{ px: 1, py: 0.5, backgroundColor: featured ? "#e4e8ff" : "#eeedea" }}>
          <Typography sx={{ fontSize: "8px", color: featured ? "#2451ff" : "#555", fontWeight: 500, whiteSpace: "nowrap" }}>
            {model.tag}
          </Typography>
        </Box>
      </Box>

      <Typography
        component="h3"
        sx={{
          mb: 0.5,
          fontSize: { xs: "18px", sm: "17px" },
          fontWeight: 600,
          letterSpacing: "-0.5px",
          lineHeight: 1.3,
          color: "#111",
        }}
      >
        {model.title}
      </Typography>

      <Typography
        sx={{
          minHeight: { xs: "auto", sm: "58px" },
          fontSize: "10px",
          lineHeight: 1.65,
          color: "#555",
        }}
      >
        {model.description}
      </Typography>

      <Box sx={{ my: 1.75, borderTop: "1px solid #e7e5e0" }} />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2.5 }}>
        {model.benefits.map((benefit) => (
          <Box key={benefit} sx={{ display: "flex", alignItems: "flex-start", gap: 0.75 }}>
            <CheckIcon sx={{ fontSize: 13, color: "#2451ff", mt: "1px", flexShrink: 0 }} />
            <Typography sx={{ fontSize: "10px", lineHeight: 1.5, color: "#333" }}>
              {benefit}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        fullWidth
        variant={featured ? "contained" : "outlined"}
        href={model.href}
        disableElevation
        sx={{
          mt: "auto",
          minHeight: 34,
          borderRadius: 0,
          borderColor: "#555",
          borderWidth: featured ? 0 : "1px",
          backgroundColor: featured ? "#080808" : "transparent",
          color: featured ? "#fff" : "#111",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.4px",
          "&:hover": {
            backgroundColor: featured ? "#2451ff" : "#080808",
            borderColor: "#080808",
            color: "#fff",
          },
        }}
      >
        {model.action}
      </Button>
    </Box>
  );
}
