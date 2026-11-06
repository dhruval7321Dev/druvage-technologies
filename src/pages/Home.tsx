import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import SectionTitle from '../components/SectionTitle';

const services = [
  {
    icon: <CodeIcon />,
    title: 'Web Development',
    text: 'Fast, secure and scalable business applications.',
  },
  {
    icon: <PhoneAndroidIcon />,
    title: 'Mobile Apps',
    text: 'Modern Android and cross-platform experiences.',
  },
  {
    icon: <CloudQueueIcon />,
    title: 'Cloud Solutions',
    text: 'Reliable APIs, databases and cloud-ready systems.',
  },
  {
    icon: <AutoAwesomeIcon />,
    title: 'AI & Automation',
    text: 'Smart workflows that improve business efficiency.',
  },
];

const stats = [
  ['20+', 'Projects'],
  ['5+', 'Years Experience'],
  ['10+', 'Digital Solutions'],
  ['24/7', 'Product Mindset'],
];

const capabilities = [
  'Web Platforms',
  'Mobile Experiences',
  'Cloud Systems',
  'AI Automation',
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Box
        className="hero-grid"
        sx={{
          minHeight: { md: '82vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">

            <Grid xs={12} sm={7} >
              <Chip
                label="Digital Solutions • Cloud • AI • Mobile"
                sx={{
                  mb: 2.5,
                  fontWeight: 700,
                  bgcolor: '#EEF2FF',
                  color: '#4338CA',
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: 38, sm: 52, md: 68 },
                  lineHeight: 1.05,
                  fontWeight: 900,
                  letterSpacing: '-2px',
                }}
              >
                We build technology that{' '}
                <span className="gradient-text">
                  moves businesses forward.
                </span>
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2.5,
                  maxWidth: 650,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.8,
                }}
              >
                Druvage Technologies creates scalable web, mobile and
                intelligent software solutions that turn ideas into
                reliable digital products.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1.5}
                sx={{ mt: 3.5 }}
              >
                <Button
                  component={Link}
                  to="/products"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  sx={{ width: { sm: 'auto' } }}
                >
                  Explore Products
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  fullWidth
                  sx={{ width: { sm: 'auto' } }}
                >
                  Start a Project
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={{ xs: 2, sm: 3 }}
                flexWrap="wrap"
                sx={{ mt: 3.5, gap: 1.5 }}
              >
                {['Modern Architecture', 'Business Focused', 'Built to Scale'].map(
                  (item) => (
                    <Typography
                      key={item}
                      variant="body2"
                      fontWeight={700}
                      color="text.secondary"
                    >
                      ✓ {item}
                    </Typography>
                  )
                )}
              </Stack>
            </Grid>

            {/* HERO CARD */}
            <Grid  xs={12} sm={5}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: 5,
                  background:
                    'linear-gradient(135deg,rgba(79,70,229,.22),rgba(6,182,212,.22))',
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 4,
                    bgcolor: 'rgba(255,255,255,.9)',
                    border: '1px solid #E2E8F0',
                  }}
                >
                  <Typography fontWeight={900}>
                    Digital transformation
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1, lineHeight: 1.7 }}
                  >
                    From concept to production, we engineer dependable
                    products for modern businesses.
                  </Typography>

                  <Box sx={{ mt: 2.5, display: 'grid', gap: 1.2 }}>
                    {capabilities.map((item, index) => (
                      <Box
                        key={item}
                        sx={{
                          p: 1.5,
                          border: '1px solid #E2E8F0',
                          borderRadius: 2.5,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          bgcolor: '#fff',
                        }}
                      >
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            flexShrink: 0,
                            borderRadius: '50%',
                            bgcolor:
                              index % 2 ? '#06B6D4' : '#4F46E5',
                          }}
                        />
                        <Typography fontWeight={700}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box className="section">
        <Container maxWidth="lg">
          <SectionTitle
            eyebrow="What we do"
            title="Technology solutions designed around your goals."
            description="We combine product thinking, engineering and clean design to deliver practical solutions ready for tomorrow."
          />

          <Grid container spacing={2.5}>
            {services.map((service) => (
              <Grid key={service.title}  xs={12} sm={6} md={3}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* STATS */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#0F172A', color: '#fff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map(([number, label]) => (
              <Grid key={label}  xs={12} sm={3}>
                <Typography
                  sx={{
                    fontSize: { xs: 32, md: 44 },
                    fontWeight: 900,
                  }}
                >
                  {number}
                </Typography>

                <Typography color="#94A3B8">
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box className="section">
        <Container maxWidth="lg">
          <Box
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: 4,
              background:
                'linear-gradient(135deg,#EEF2FF,#ECFEFF)',
              border: '1px solid #DDE7F5',
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid  xs={12} sm={8}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: 28, md: 40 },
                    fontWeight: 900,
                  }}
                >
                  Have an idea? Let's turn it into a product.
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ mt: 1.5, lineHeight: 1.7 }}
                >
                  Tell us what you are building and we’ll help you
                  choose the right technology approach.
                </Typography>
              </Grid>

              <Grid
                 xs={12} sm={4}
                sx={{ textAlign: { xs: 'left', md: 'right' } }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  sx={{ width: { md: 'auto' } }}
                >
                  Talk to Druvage
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
