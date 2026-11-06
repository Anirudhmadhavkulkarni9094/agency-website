import { ArrowForward } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import IntroCard from "@/component/Atom/IntroCard";
import ProjectCard from "@/component/Atom/ProjectCard";
import content from "@/data/content.json";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  const { intro } = content.selectedWork;

  return (
    <Box
      component="section"
      id="work"
      sx={{
        backgroundColor: "#faf9f6",
        px: { xs: 3, sm: 5, lg: 10 },
        py: { xs: 8, lg: 10 },
      }}
    >
      <Box sx={{ mb: 3.5 }}>
        <IntroCard
          variant="split"
          {...intro}
          labelSx={{
            mb: 0.5,
            fontSize: "8px",
            fontWeight: 600,
            letterSpacing: "1px",
            color: "#555",
          }}
          titleSx={{
            maxWidth: 550,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: { xs: "32px", sm: "38px" },
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            color: "#080808",
          }}
          descriptionSx={{
            maxWidth: 400,
            justifySelf: { xs: "start", sm: "end" },
            fontSize: "10px",
            lineHeight: 1.7,
            color: "#555",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForward />}
          href="#contact"
          sx={{
            borderRadius: 0,
            borderColor: "#888",
            color: "#111",
            px: 2,
            py: 0.7,
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            "&:hover": {
              borderColor: "#111",
              backgroundColor: "#111",
              color: "#fff",
            },
          }}
        >
          DISCUSS A SIMILAR PROJECT
        </Button>
      </Box>
    </Box>
  );
}
