import { Box } from "@mui/material";
import IntroCard from "@/component/Atom/IntroCard";
import ProcessStepCard from "@/component/Atom/ProcessStepCard";
import content from "@/data/content.json";

export default function HowWeWork() {
  const { intro, steps } = content.process;

  return (
    <Box
      component="section"
      id="process"
      sx={{
        backgroundColor: "#f5f4f1",
        borderTop: "1px solid #e7e5e0",
        px: { xs: 3, sm: 5, lg: 10 },
        py: { xs: 7, md: 8, lg: 10 },
      }}
    >
      <IntroCard variant="heading" {...intro} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          rowGap: { xs: 0, sm: 3, lg: 0 },
        }}
      >
        {steps.map((step) => (
          <ProcessStepCard key={step.number} step={step} />
        ))}
      </Box>
    </Box>
  );
}
