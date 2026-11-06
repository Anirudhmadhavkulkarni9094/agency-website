import { ArrowOutward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import type { ProjectCaseStudy } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: ProjectCaseStudy;
}) {
  return (
    <Box
      component="article"
      sx={{
        minWidth: 0,
        border: "1px solid #e4e1da",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 220ms ease, transform 220ms ease",
        "&:hover": {
          borderColor: "#aaa69d",
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        sx={{
          px: 1.5,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          borderBottom: "1px solid #e7e5e0",
        }}
      >
        <Typography
          sx={{
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.7px",
            color: "#555",
          }}
        >
          {project.category}
        </Typography>

        <Typography sx={{ fontSize: "9px", color: "#777", whiteSpace: "nowrap" }}>
          {project.number}
        </Typography>
      </Box>

      <Box sx={{ p: 1.5, pb: 0, position: "relative" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            overflow: "hidden",
            backgroundColor: "#eeece6",
            "&:hover img": { transform: "scale(1.025)" },
          }}
        >
          {project.previewImage ? (
            <Image
              src={project.previewImage}
              alt={project.previewAlt ?? `${project.name} project preview`}
              fill
              sizes="(max-width: 599px) 100vw, (max-width: 1023px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                transition: "transform 400ms ease",
              }}
            />
          ) : (
            <Box
              role="img"
              aria-label={`${project.name} preview image not yet available`}
              sx={{
                height: "100%",
                display: "grid",
                alignContent: "center",
                justifyItems: "center",
                gap: 1,
                color: "#68665f",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: "10px", fontWeight: 600, letterSpacing: "1px" }}>
                {project.name}
              </Typography>
              <Typography sx={{ fontSize: "9px" }}>PREVIEW TO BE CONFIRMED</Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={{ px: 1.5, pt: 2, pb: 1.5, flex: 1 }}>
        <Typography
          component="h3"
          sx={{
            mb: 0.75,
            fontSize: "20px",
            fontWeight: 600,
            letterSpacing: "-0.6px",
            color: "#111",
          }}
        >
          {project.name}
        </Typography>

        <Typography sx={{ fontSize: "13px", lineHeight: 1.7, color: "#555" }}>
          {project.summary}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75, mt: 1.5 }}>
          {project.tags.map((tag) => (
            <Typography
              key={tag}
              sx={{
                px: 1,
                py: 0.5,
                border: "1px solid #e7e5e0",
                fontSize: "9px",
                color: "#555",
              }}
            >
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          px: 1.5,
          py: 1.25,
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          borderTop: "1px solid #e7e5e0",
        }}
      >
        <Link
          href={`/projects/${project.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            color: "#111",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.3px",
            textDecoration: "none",
          }}
        >
          View Case Study <ArrowOutward sx={{ fontSize: 13 }} />
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              color: "#555",
              fontSize: 10,
              textDecoration: "none",
            }}
          >
            Visit Website <ArrowOutward sx={{ fontSize: 13 }} />
          </a>
        ) : (
          <Typography sx={{ fontSize: "10px", color: "#888" }}>
            Website link pending
          </Typography>
        )}
      </Box>
    </Box>
  );
}
