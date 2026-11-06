import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack, ArrowOutward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Navbar from "@/component/Atom/Navbar";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const canonical = `/projects/${project.slug}`;

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical },
    robots:
      project.status === "published"
        ? undefined
        : { index: false, follow: false },
    openGraph: {
      type: "article",
      url: canonical,
      title: project.name,
      description: project.summary,
      ...(project.previewImage ? { images: [project.previewImage] } : {}),
    },
  };
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 3, md: 4 },
        borderTop: "1px solid #e6e4df",
      }}
    >
      <Typography
        component="h2"
        sx={{
          mb: 1.5,
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          color: "#666",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <Box
          component="article"
          sx={{
            backgroundColor: "#faf9f6",
            px: { xs: 3, sm: 5, lg: 10 },
            pt: { xs: 5, md: 8 },
            pb: { xs: 8, md: 12 },
          }}
        >
          <Box sx={{ maxWidth: 1200, mx: "auto" }}>
            <Link
              href="/#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#555",
                fontSize: 11,
                textDecoration: "none",
              }}
            >
              <ArrowBack sx={{ fontSize: 14 }} /> Selected work
            </Link>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { md: "end" },
                gap: 3,
                mt: { xs: 4, md: 6 },
                mb: 4,
              }}
            >
              <Box sx={{ maxWidth: 760 }}>
                <Typography
                  component="p"
                  sx={{
                    mb: 1.5,
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    color: "#555",
                  }}
                >
                  {project.category}
                </Typography>
                <Typography
                  component="h1"
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: { xs: "42px", sm: "60px", md: "76px" },
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: "-2px",
                    color: "#080808",
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 620,
                    mt: 2,
                    fontSize: { xs: "15px", md: "17px" },
                    lineHeight: 1.7,
                    color: "#555",
                  }}
                >
                  {project.summary}
                </Typography>
              </Box>

              {project.liveUrl && (
                <Button
                  component="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  endIcon={<ArrowOutward />}
                  sx={{
                    alignSelf: { xs: "flex-start", md: "auto" },
                    flexShrink: 0,
                    borderRadius: 0,
                    borderColor: "#777",
                    color: "#111",
                    px: 2,
                    py: 1,
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.4px",
                    "&:hover": {
                      borderColor: "#111",
                      backgroundColor: "#111",
                      color: "#fff",
                    },
                  }}
                >
                  Visit Live Website
                </Button>
              )}
            </Box>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "4 / 3", md: "16 / 8" },
                overflow: "hidden",
                backgroundColor: "#eeece6",
                border: "1px solid #e4e1da",
              }}
            >
              {project.previewImage ? (
                <Image
                  src={project.previewImage}
                  alt={project.previewAlt ?? `${project.name} project preview`}
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
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
                    px: 3,
                    color: "#68665f",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1px" }}
                  >
                    {project.name}
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Project preview awaiting confirmation
                  </Typography>
                </Box>
              )}
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "0.75fr 1.5fr" },
                gap: { xs: 4, md: 8 },
                mt: { xs: 5, md: 8 },
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    mb: 2,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "28px",
                    fontWeight: 400,
                    color: "#111",
                  }}
                >
                  Project overview
                </Typography>
                <Box sx={{ display: "grid", gap: 2 }}>
                  <Box>
                    <Typography sx={{ mb: 0.5, fontSize: "9px", color: "#777" }}>
                      CATEGORY
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#222" }}>
                      {project.category}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ mb: 0.75, fontSize: "9px", color: "#777" }}>
                      PROJECT TAGS
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                      {project.tags.map((tag) => (
                        <Typography
                          key={tag}
                          sx={{
                            px: 1,
                            py: 0.5,
                            border: "1px solid #e4e1da",
                            fontSize: "10px",
                          }}
                        >
                          {tag}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={{ mb: 0.5, fontSize: "9px", color: "#777" }}>
                      TECHNOLOGY
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#555" }}>
                      {project.technologyStack?.length
                        ? project.technologyStack.join(" · ")
                        : "Not publicly verified"}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box>
                {project.overview && (
                  <DetailSection title="Overview">
                    <Typography sx={{ fontSize: "14px", lineHeight: 1.8, color: "#444" }}>
                      {project.overview}
                    </Typography>
                  </DetailSection>
                )}
                {project.challenge && (
                  <DetailSection title="The user challenge">
                    <Typography sx={{ fontSize: "14px", lineHeight: 1.8, color: "#444" }}>
                      {project.challenge}
                    </Typography>
                  </DetailSection>
                )}
                {project.approach && (
                  <DetailSection title="The approach">
                    <Typography sx={{ fontSize: "14px", lineHeight: 1.8, color: "#444" }}>
                      {project.approach}
                    </Typography>
                  </DetailSection>
                )}
                {project.features && project.features.length > 0 && (
                  <DetailSection title="Features visible on the public platform">
                    <Box
                      component="ul"
                      sx={{
                        m: 0,
                        pl: 2.5,
                        display: "grid",
                        gap: 1,
                        color: "#444",
                      }}
                    >
                      {project.features.map((feature) => (
                        <Typography
                          component="li"
                          key={feature}
                          sx={{ fontSize: "14px", lineHeight: 1.7 }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </DetailSection>
                )}
                {project.outcome && (
                  <DetailSection title="Outcome">
                    <Typography sx={{ fontSize: "14px", lineHeight: 1.8, color: "#444" }}>
                      {project.outcome}
                    </Typography>
                  </DetailSection>
                )}
                {project.publicationNote && (
                  <Box
                    role="status"
                    sx={{
                      mt: 2,
                      p: { xs: 2, md: 3 },
                      border: "1px solid #e4e1da",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", lineHeight: 1.8, color: "#555" }}>
                      {project.publicationNote}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>

            <Box
              id="contact"
              sx={{
                mt: { xs: 7, md: 10 },
                p: { xs: 3, md: 5 },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: { sm: "center" },
                gap: 3,
                backgroundColor: "#111",
                color: "#fff",
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 400,
                  }}
                >
                  Building something similar?
                </Typography>
                <Typography sx={{ mt: 1, fontSize: "13px", color: "#c5c5c5" }}>
                  Tell us what your business needs next.
                </Typography>
              </Box>
              <Button
                href="/#contact"
                variant="outlined"
                endIcon={<ArrowOutward />}
                sx={{
                  alignSelf: { xs: "flex-start", sm: "auto" },
                  borderRadius: 0,
                  borderColor: "#aaa",
                  color: "#fff",
                  px: 2,
                  py: 1,
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.4px",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "#fff",
                    color: "#111",
                  },
                }}
              >
                Discuss a similar project
              </Button>
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
