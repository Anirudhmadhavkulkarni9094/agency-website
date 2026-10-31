
import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

interface IntroCardProps {
  variant?: "default" | "split" | "heading" | "stacked";
  label: string;
  title: string;
  description?: string;
  splitColumns?: { xs: string; sm: string };
  labelSx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
  descriptionSx?: SxProps<Theme>;
}

const variantStyles = {
  default: {
    root: {
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "280px 1fr" },
      gap: { xs: 3, lg: 4.5 },
      pb: 4,
      borderBottom: "1px solid #e6e5e1",
    },
    label: {
      mb: 1,
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#505050",
    },
    title: {
      maxWidth: "340px",
      fontSize: { xs: "28px", sm: "27px", lg: "32px" },
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-1px",
      color: "#000",
    },
    description: {
      maxWidth: "540px",
      pt: 0.5,
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.75,
      color: "#484848",
    },
  },
  split: {
    root: {
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "1fr 0.8fr" },
      alignItems: "end",
      gap: 3,
      pb: 3,
      borderBottom: "1px solid #e7e5e1",
    },
    label: {
      mb: 0.5,
      fontSize: "9px",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#505050",
    },
    title: {
      maxWidth: 550,
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: { xs: "32px", sm: "38px" },
      fontWeight: 400,
      lineHeight: 1.05,
      letterSpacing: "-1.5px",
      color: "#080808",
    },
    description: {
      maxWidth: 400,
      justifySelf: { xs: "start", sm: "end" },
      fontSize: "10px",
      lineHeight: 1.7,
      color: "#555",
    },
  },
  heading: {
    root: {
      mb: 4,
      pb: 3.5,
      borderBottom: "1px solid #e7e5e1",
    },
    label: {
      mb: 0.5,
      fontSize: "9px",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#505050",
    },
    title: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: { xs: "34px", sm: "42px", lg: "44px" },
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: "-1.5px",
      color: "#080808",
    },
    description: {},
  },
  stacked: {
    root: {},
    label: {
      mb: 1,
      fontSize: "9px",
      fontWeight: 600,
      letterSpacing: "1px",
      color: "#505050",
    },
    title: {
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: { xs: "38px", sm: "42px", lg: "44px" },
      fontWeight: 400,
      lineHeight: 1.12,
      letterSpacing: "-1.5px",
      color: "#080808",
      whiteSpace: "pre-line",
    },
    description: {
      mt: 2,
      fontSize: "13px",
      lineHeight: 1.8,
      color: "#484848",
    },
  },
} satisfies Record<
  NonNullable<IntroCardProps["variant"]>,
  { root: SxProps<Theme>; label: SxProps<Theme>; title: SxProps<Theme>; description: SxProps<Theme> }
>;

export default function IntroCard({
  variant = "default",
  label,
  title,
  description,
  splitColumns,
  labelSx,
  titleSx,
  descriptionSx,
}: IntroCardProps) {
  const styles = variantStyles[variant];

  return (
    <Box
      sx={{
        ...styles.root,
        ...(splitColumns ? { gridTemplateColumns: splitColumns } : {}),
      }}
    >
      <Box>
        <Typography
          component="p"
          sx={labelSx ?? styles.label}
        >
          {label}
        </Typography>

        <Typography
          component="h2"
          sx={titleSx ?? styles.title}
        >
          {title}
        </Typography>
      </Box>

      {description && (
        <Typography
          component="p"
          sx={descriptionSx ?? styles.description}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
