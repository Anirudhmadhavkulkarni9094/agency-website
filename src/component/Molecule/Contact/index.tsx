
"use client"
import React, { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import IntroCard from "@/component/Atom/IntroCard";
import content from "@/data/content.json";

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState(content.contact.defaultBudget);
  const { intro, fields } = content.contact;
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    brief: "",
  });

  const handleChange = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceChange = (
    _: React.MouseEvent<HTMLElement>,
    values: string[]
  ) => {
    setSelectedServices(values);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inquiry = {
      ...form,
      services: selectedServices,
      budget: selectedBudget,
    };

    console.log("Project inquiry:", inquiry);

    // Connect your backend or email service here.
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      backgroundColor: "#f5f4f1",
      fontSize: "11px",
      "& fieldset": {
        borderColor: "#e5e3df",
      },
      "&:hover fieldset": {
        borderColor: "#aaa",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#111",
        borderWidth: "1px",
      },
    },
    "& .MuiInputBase-input": {
      padding: "9px 12px",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#94a3b8",
      opacity: 1,
    },
  };

  const labelSx = {
    display: "block",
    mb: 0.75,
    fontSize: "9px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    color: "#222",
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: "#faf9f6",
        px: {
          xs: 3,
          sm: 5,
          lg: 10,
        },
        py: {
          xs: 7,
          md: 9,
          lg: 10,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "0.8fr 1.2fr",
          },
          gap: {
            xs: 5,
            md: 6,
            lg: 8,
          },
          alignItems: "stretch",
        }}
      >
        {/* LEFT CONTENT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IntroCard
            variant="stacked"
            {...intro}
            labelSx={{
              mb: 0.5,
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#2451ff",
            }}
            titleSx={{
              maxWidth: 430,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: { xs: "43px", sm: "48px", lg: "50px" },
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-1.8px",
              color: "#080808",
            }}
            descriptionSx={{
              mt: 2,
              maxWidth: 400,
              fontSize: "13px",
              lineHeight: 1.8,
              color: "#484848",
            }}
          />

          {/* Contact Details */}
          <Box
            sx={{
              pt: 4,
              mt: {
                xs: 4,
                md: "auto",
              },
              borderTop: "1px solid #e6e4df",
            }}
          >
            <Typography sx={labelSx}>
              {content.contact.emailLabel}
            </Typography>

            <Box
              component="a"
              href={`mailto:${content.contact.email}`}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                color: "#111",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {content.contact.email}
              <ArrowOutwardIcon sx={{ fontSize: 14 }} />
            </Box>

            <Box sx={{ mt: 2.5 }}>
              <Typography sx={labelSx}>
                {content.contact.responseLabel}
              </Typography>

              <Typography
                sx={{
                  fontSize: "10px",
                  color: "#333",
                }}
              >
                {content.contact.responseTime}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* RIGHT: INQUIRY FORM */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: {
              xs: 2.5,
              sm: 3,
              lg: 3.5,
            },
            border: "1px solid #e5e3df",
            backgroundColor: "#faf9f6",
            boxShadow: "0 5px 12px rgba(0,0,0,0.07)",
          }}
        >
          {/* Name & Email */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
              },
              gap: 1.5,
              mb: 2,
            }}
          >
            <Box>
              <Typography sx={labelSx}>
                {fields.name.label}
              </Typography>

              <TextField
                fullWidth
                required
                size="small"
                placeholder={fields.name.placeholder}
                value={form.name}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
                sx={fieldSx}
              />
            </Box>

            <Box>
              <Typography sx={labelSx}>
                {fields.email.label}
              </Typography>

              <TextField
                fullWidth
                required
                type="email"
                size="small"
                placeholder={fields.email.placeholder}
                value={form.email}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
                sx={fieldSx}
              />
            </Box>
          </Box>

          {/* Company */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={labelSx}>
              {fields.company.label}
            </Typography>

            <TextField
              fullWidth
              size="small"
              placeholder={fields.company.placeholder}
              value={form.company}
              onChange={(e) =>
                handleChange("company", e.target.value)
              }
              sx={fieldSx}
            />
          </Box>

          {/* Services */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={labelSx}>
              {fields.servicesLabel}
            </Typography>

            <ToggleButtonGroup
              value={selectedServices}
              onChange={handleServiceChange}
              aria-label={fields.servicesAriaLabel}
              sx={{
                display: "grid",
                width: "100%",
                gridTemplateColumns: {
                  xs: "1fr 1fr",
                  sm: "repeat(3, minmax(0, 1fr))",
                },
                gap: 0.75,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid #e5e3df !important",
                  borderRadius: "0 !important",
                  margin: 0,
                },
                "& .MuiToggleButton-root": {
                  minHeight: 27,
                  px: 0.5,
                  py: 0.5,
                  justifyContent: "flex-start",
                  fontSize: "8px",
                  fontWeight: 600,
                  letterSpacing: "0.1px",
                  color: "#222",
                  backgroundColor: "#f5f4f1",
                  "&.Mui-selected": {
                    backgroundColor: "#111",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#222",
                    },
                  },
                },
              }}
            >
              {content.contact.services.map((service) => (
                <ToggleButton
                  key={service}
                  value={service}
                  aria-label={service}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 0.6,
                      width: 4,
                      height: 4,
                      flexShrink: 0,
                      backgroundColor: "currentColor",
                    }}
                  />
                  {service}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* Investment Range */}
          <Box sx={{ mb: 2.5 }}>
            <Typography sx={labelSx}>
              {fields.budgetLabel}
            </Typography>

            <ToggleButtonGroup
              exclusive
              fullWidth
              value={selectedBudget}
              onChange={(_, value) => {
                if (value) setSelectedBudget(value);
              }}
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 0.75,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid #e5e3df !important",
                  borderRadius: "0 !important",
                  margin: 0,
                },
                "& .MuiToggleButton-root": {
                  minHeight: 32,
                  px: 0.5,
                  py: 0.5,
                  fontSize: "9px",
                  color: "#333",
                  backgroundColor: "#f5f4f1",
                  "&.Mui-selected": {
                    backgroundColor: "#080808",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#222",
                    },
                  },
                },
              }}
            >
              {content.contact.budgets.map((budget) => (
                <ToggleButton
                  key={budget}
                  value={budget}
                >
                  {budget}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* Project Brief */}
          <Box sx={{ mb: 2.5 }}>
            <Typography sx={labelSx}>
              {fields.brief.label}
            </Typography>

            <TextField
              fullWidth
              required
              multiline
              minRows={3}
              maxRows={6}
              placeholder={fields.brief.placeholder}
              value={form.brief}
              onChange={(e) =>
                handleChange("brief", e.target.value)
              }
              sx={{
                ...fieldSx,
                "& .MuiInputBase-input": {
                  padding: "10px 12px",
                  fontSize: "11px",
                  lineHeight: 1.7,
                },
              }}
            />
          </Box>

          {/* Submit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              minHeight: 36,
              borderRadius: 0,
              backgroundColor: "#080808",
              color: "#fff",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              "&:hover": {
                backgroundColor: "#2451ff",
              },
            }}
          >
            {content.contact.submitLabel}
          </Button>

          {/* Privacy Note */}
          <Typography
            sx={{
              mt: 1,
              textAlign: "center",
              fontSize: "8px",
              lineHeight: 1.6,
              color: "#666",
            }}
          >
            {content.contact.privacyNote}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
