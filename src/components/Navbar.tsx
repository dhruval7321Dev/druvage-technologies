import React from 'react';
import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link, useLocation } from 'react-router-dom';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Products', '/products'],
  ['Services', '/services'],
  ['Contact', '/contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname.startsWith(path);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: 1200,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(226,232,240,0.9)',
        color: '#0F172A',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: 1280,
          minHeight: 76,
          mx: 'auto',
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* ================= LOGO ================= */}
        <Box
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 1.4,
            mr: 'auto',
          }}
        >
          {/* Logo Icon */}
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '13px',
              display: 'grid',
              placeItems: 'center',
              position: 'relative',
              overflow: 'hidden',
              background:
                'linear-gradient(135deg, #4F46E5 0%, #7C3AED 48%, #06B6D4 100%)',
              boxShadow:
                '0 8px 24px rgba(79,70,229,0.25)',
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 900,
                letterSpacing: '-1px',
              }}
            >
              D
            </Typography>

            <Box
              sx={{
                position: 'absolute',
                width: 22,
                height: 22,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.35)',
                top: -8,
                right: -8,
              }}
            />
          </Box>

          {/* Brand */}
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: 18,
                  sm: 20,
                },
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.5px',
                color: '#0F172A',
              }}
            >
              Druvage
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 9.5,
                fontWeight: 800,
                color: '#64748B',
                letterSpacing: {
                  xs: 1.2,
                  sm: 2,
                },
              }}
            >
              TECHNOLOGIES
            </Typography>
          </Box>
        </Box>

        {/* ================= DESKTOP NAV ================= */}
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            alignItems: 'center',
            gap: 0.5,
            mr: 2,
          }}
        >
          {nav.map(([label, path]) => {
            const active = isActive(path);

            return (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  position: 'relative',
                  minWidth: 'auto',
                  px: 1.8,
                  py: 1,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: 14.5,
                  fontWeight: active ? 800 : 600,
                  color: active
                    ? '#4F46E5'
                    : '#475569',

                  '&:hover': {
                    background: '#F1F5F9',
                    color: '#4F46E5',
                  },

                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '50%',
                    bottom: 3,
                    width: active ? 22 : 0,
                    height: 3,
                    borderRadius: 10,
                    background:
                      'linear-gradient(90deg,#4F46E5,#06B6D4)',
                    transform: 'translateX(-50%)',
                    transition: 'all .25s ease',
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>

        {/* ================= DESKTOP CTA ================= */}
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            display: {
              xs: 'none',
              sm: 'inline-flex',
            },
            borderRadius: 2.5,
            px: 2.5,
            py: 1.2,
            fontSize: 14,
            fontWeight: 800,
            textTransform: 'none',
            background:
              'linear-gradient(135deg,#4F46E5,#7C3AED)',
            boxShadow:
              '0 8px 22px rgba(79,70,229,0.22)',

            '&:hover': {
              background:
                'linear-gradient(135deg,#4338CA,#6D28D9)',
              boxShadow:
                '0 10px 28px rgba(79,70,229,0.3)',
            },
          }}
        >
          Let's Talk
        </Button>

        {/* ================= MOBILE MENU ================= */}
        <IconButton
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          sx={{
            display: {
              xs: 'flex',
              md: 'none',
            },
            ml: 1,
            width: 44,
            height: 44,
            border: '1px solid #E2E8F0',
            borderRadius: 2.5,
            color: '#0F172A',

            '&:hover': {
              background: '#F1F5F9',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: '86vw',
              sm: 360,
            },
            maxWidth: 380,
            background: '#FFFFFF',
          },
        }}
      >
        {/* Drawer Header */}
        <Box
          sx={{
            px: 2.5,
            py: 2.2,
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <Box
            component={Link}
            to="/"
            onClick={() => setOpen(false)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              textDecoration: 'none',
              mr: 'auto',
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2.5,
                display: 'grid',
                placeItems: 'center',
                background:
                  'linear-gradient(135deg,#4F46E5,#06B6D4)',
              }}
            >
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: 17,
                }}
              >
                D
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  color: '#0F172A',
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                Druvage
              </Typography>

              <Typography
                sx={{
                  color: '#64748B',
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  mt: 0.5,
                }}
              >
                TECHNOLOGIES
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer Content */}
        <Box
          sx={{
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Typography
            sx={{
              px: 1,
              mb: 1,
              color: '#94A3B8',
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
            }}
          >
            Navigation
          </Typography>

          <List sx={{ p: 0 }}>
            {nav.map(([label, path]) => {
              const active = isActive(path);

              return (
                <ListItemButton
                  key={path}
                  component={Link}
                  to={path}
                  selected={active}
                  onClick={() => setOpen(false)}
                  sx={{
                    mb: 0.7,
                    minHeight: 50,
                    borderRadius: 2.5,
                    px: 2,

                    color: active
                      ? '#4F46E5'
                      : '#475569',

                    fontWeight: active ? 800 : 600,

                    '&.Mui-selected': {
                      background:
                        'linear-gradient(90deg,#EEF2FF,#F8FAFC)',
                      color: '#4F46E5',
                    },

                    '&.Mui-selected:hover': {
                      background:
                        'linear-gradient(90deg,#EEF2FF,#F8FAFC)',
                    },

                    '&:hover': {
                      background: '#F8FAFC',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'inherit',
                      fontSize: 15,
                    }}
                  >
                    {label}
                  </Typography>

                  {active && (
                    <Box
                      sx={{
                        ml: 'auto',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg,#4F46E5,#06B6D4)',
                      }}
                    />
                  )}
                </ListItemButton>
              );
            })}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Mobile CTA */}
          <Button
            fullWidth
            variant="contained"
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardIcon />}
            onClick={() => setOpen(false)}
            sx={{
              py: 1.35,
              borderRadius: 2.5,
              textTransform: 'none',
              fontSize: 15,
              fontWeight: 800,
              background:
                'linear-gradient(135deg,#4F46E5,#7C3AED)',
              boxShadow:
                '0 8px 22px rgba(79,70,229,0.2)',

              '&:hover': {
                background:
                  'linear-gradient(135deg,#4338CA,#6D28D9)',
              },
            }}
          >
            Start a Project
          </Button>

          {/* Bottom Brand Message */}
          <Box
            sx={{
              mt: 'auto',
              pt: 3,
              px: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                color: '#0F172A',
              }}
            >
              Build. Scale. Transform.
            </Typography>

            <Typography
              sx={{
                mt: 0.5,
                fontSize: 12,
                lineHeight: 1.6,
                color: '#94A3B8',
              }}
            >
              Digital solutions for modern businesses.
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
