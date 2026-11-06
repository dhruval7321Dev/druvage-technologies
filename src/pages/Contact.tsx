
import { useState } from 'react';
import type { FormEvent } from 'react';
import React from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

import SectionTitle from '../components/SectionTitle';

const contactInfo = [
  {
    icon: <EmailOutlinedIcon />,
    title: 'Email',
    value: 'hello@druvagetechnologies.com',
  },
  {
    icon: <PhoneOutlinedIcon />,
    title: 'Phone',
    value: '+91 00000 00000',
  },
  {
    icon: <LocationOnOutlinedIcon />,
    title: 'Office',
    value: 'Ahmedabad, Gujarat, India',
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Box className="section">
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something valuable together."
          description="Share your project, business challenge or product idea. We'll help you choose the right technology approach."
        />

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          alignItems="stretch"
        >
          {/* CONTACT INFO */}
          <Grid xs={12} md={5} >
            <Box
              sx={{
                display: 'grid',
                gap: { xs: 1.5, sm: 2 },
                height: '100%',
              }}
            >
              {contactInfo.map((item) => (
                <Paper
                  key={item.title}
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 2.5 },
                    minHeight: { xs: 76, sm: 88 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    border: '1px solid #E2E8F0',
                    borderRadius: { xs: 2.5, sm: 3 },
                    transition: '0.2s ease',
                    '&:hover': {
                      transform: { sm: 'translateY(-2px)' },
                      borderColor: '#C7D2FE',
                      boxShadow: '0 10px 30px rgba(15,23,42,0.07)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 42, sm: 48 },
                      height: { xs: 42, sm: 48 },
                      minWidth: { xs: 42, sm: 48 },
                      borderRadius: 2.5,
                      display: 'grid',
                      placeItems: 'center',
                      bgcolor: '#EEF2FF',
                      color: '#4F46E5',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: { xs: 14, sm: 15 },
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      sx={{
                        mt: 0.3,
                        fontSize: { xs: 13, sm: 14 },
                        wordBreak: 'break-word',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* CONTACT FORM */}
          <Grid xs={12} md={7} >
            <Paper
              component="form"
              onSubmit={submit}
              elevation={0}
              sx={{
                height: '100%',
                p: { xs: 2, sm: 3, md: 4 },
                border: '1px solid #E2E8F0',
                borderRadius: { xs: 3, sm: 4 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 20, sm: 24 },
                  mb: 0.8,
                }}
              >
                Send us a message
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  fontSize: { xs: 13, sm: 14 },
                  lineHeight: 1.6,
                  mb: { xs: 2, sm: 3 },
                }}
              >
                Tell us about your project and we'll get back to you.
              </Typography>

              {sent && (
                <Alert
                  severity="success"
                  sx={{
                    mb: 2,
                    borderRadius: 2,
                  }}
                >
                  Thanks! Your message has been submitted successfully.
                </Alert>
              )}

              <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                {/* NAME */}
                <Grid xs={12} sm={6} >
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    size="small"
                  />
                </Grid>

                {/* EMAIL */}
                <Grid  xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    size="small"
                  />
                </Grid>

                {/* PROJECT */}
                <Grid  xs={12} >
                  <TextField
                    fullWidth
                    label="Company / Project"
                    size="small"
                  />
                </Grid>

                {/* MESSAGE */}
                <Grid  xs={12} >
                  <TextField
                    fullWidth
                    required
                    multiline
                    label="Tell us about your project"
                  />
                </Grid>

                {/* BUTTON */}
                <Grid  xs={12} >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      mt: 0.5,
                      py: { xs: 1.15, sm: 1.3 },
                      borderRadius: 2.5,
                      fontWeight: 800,
                      textTransform: 'none',
                      fontSize: { xs: 14, sm: 15 },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
