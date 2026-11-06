import { Box, Container, Divider, Grid, Link as MuiLink, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
export default function Footer() {
  return (
    <Box component="footer" sx={{ background:'#0B1120', color:'#CBD5E1', pt:7, pb:3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid xs={12} md={5}>
            <Typography sx={{ color:'#fff', fontSize:24, fontWeight:900 }}>Druvage Technologies</Typography>
            <Typography sx={{ mt:2, maxWidth:430, lineHeight:1.8 }}>
              Building modern digital solutions for businesses ready to grow, automate and transform.
            </Typography>
          </Grid>
          <Grid xs={6} md={3}>
            <Typography sx={{color:'#fff', fontWeight:800, mb:2}}>Company</Typography>
            {['About','Products','Services','Contact'].map(x => (
              <MuiLink key={x} component={Link} to={'/'+x.toLowerCase()} color="inherit"
                underline="none" display="block" sx={{mb:1}}>{x}</MuiLink>
            ))}
          </Grid>
          <Grid xs={6} md={4}>
            <Typography sx={{color:'#fff', fontWeight:800, mb:2}}>Contact</Typography>
            <Typography>Ahmedabad, Gujarat, India</Typography>
            <Typography sx={{mt:1}}>hello@druvagetechnologies.com</Typography>
            <Typography sx={{mt:1}}>+91 00000 00000</Typography>
          </Grid>
        </Grid>
        <Divider sx={{my:4, borderColor:'rgba(255,255,255,.12)'}} />
        <Typography variant="body2">
          © {new Date().getFullYear()} Druvage Technologies. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}