import { ArrowOutward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import content from "@/data/content.json";

type Project = (typeof content.selectedWork.projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Box
      component="article"
      sx={{
        minWidth: 0,
        border: "1px solid #e7e5e0",
        backgroundColor: "#faf9f6",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 200ms ease",
        "&:hover": { borderColor: "#a8a6a0" },
      }}
    >
      <Box
        sx={{
          px: 1.5,
          py: 1.25,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          borderBottom: "1px solid #e7e5e0",
        }}
      >
        <Typography
          sx={{
            fontSize: "8px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: "#244cff",
          }}
        >
          {project.category}
        </Typography>

        <Typography sx={{ fontSize: "8px", color: "#777", whiteSpace: "nowrap" }}>
          {project.number} / {project.type}
        </Typography>
      </Box>

      <Box sx={{ p: 1.5, pb: 1, position: "relative" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            backgroundColor: "#e8e7e3",
            "&:hover img": { transform: "scale(1.035)" },
          }}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "transform 400ms ease",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 8,
              left: 8,
              px: 1,
              py: 0.5,
              backgroundColor: "#111",
              color: "#fff",
            }}
          >
            <Typography sx={{ fontSize: "7px", fontWeight: 600, letterSpacing: "0.5px" }}>
              {project.deliverable}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: 1.5, pb: 1.5, flex: 1 }}>
        <Typography
          component="h3"
          sx={{
            mb: 0.5,
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "-0.4px",
            color: "#111",
          }}
        >
          {project.name}
        </Typography>

        <Typography sx={{ fontSize: "10px", lineHeight: 1.6, color: "#555" }}>
          {project.description}
        </Typography>
      </Box>

      <Box
        component="a"
        href={project.href}
        sx={{
          px: 1.5,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          borderTop: "1px solid #e7e5e0",
          color: "#111",
          "&:hover": { color: "#244cff" },
        }}
      >
        <Typography sx={{ fontSize: "8px", fontWeight: 600, letterSpacing: "0.4px" }}>
          {content.selectedWork.labels.viewProject}
        </Typography>

        <ArrowOutward sx={{ fontSize: 13 }} />
      </Box>
    </Box>
  );
}
