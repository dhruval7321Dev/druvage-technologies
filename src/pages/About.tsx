import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import React from 'react';
export default function About(){
  return <Box className="section"><Container maxWidth="lg">
    <SectionTitle eyebrow="About Druvage" title="A technology partner focused on meaningful outcomes."
      description="Druvage Technologies is an IT company focused on building dependable digital products, modern applications and automation solutions for businesses."/>
    <Grid container spacing={5} alignItems="stretch">
      <Grid xs={12} md={7}>
        <Typography variant="h4" sx={{fontWeight:800,mb:2}}>Our approach</Typography>
        <Typography color="text.secondary" sx={{lineHeight:2}}>
          We believe good technology should be simple to use, easy to maintain and aligned with business goals.
          Our teams combine engineering discipline with practical product thinking to create solutions that can evolve as your business grows.
        </Typography>
        <Typography color="text.secondary" sx={{lineHeight:2,mt:2}}>
          Whether it is a customer-facing application, internal business platform, mobile app or automation workflow,
          we focus on quality, performance and long-term maintainability.
        </Typography>
      </Grid>
      <Grid xs={12} md={7}>
        <Paper sx={{p:4,height:'100%',background:'#0F172A',color:'#fff'}}>
          <Typography variant="h5" fontWeight={800}>Our values</Typography>
          {[['01','Clarity','Solve the right problem.'],['02','Quality','Build with care and consistency.'],
            ['03','Innovation','Use technology where it creates real value.'],['04','Partnership','Work as an extension of your team.']]
            .map(([n,t,d])=><Box key={n} sx={{display:'flex',gap:2,mt:3}}>
              <Typography sx={{color:'#818CF8',fontWeight:900}}>{n}</Typography>
              <Box><Typography fontWeight={800}>{t}</Typography><Typography sx={{color:'#94A3B8',mt:.4}}>{d}</Typography></Box>
            </Box>)}
        </Paper>
      </Grid>
    </Grid>

    <Box sx={{mt:8}}>
      <Typography variant="h4" fontWeight={800}>Vision & Mission</Typography>
      <Grid container spacing={3} sx={{mt:1}}>
        <Grid xs={12} md={6}><Paper sx={{p:4,height:'100%'}}>
          <Typography color="primary" fontWeight={800}>VISION</Typography>
          <Typography variant="h6" sx={{mt:1}}>Make powerful technology accessible to businesses of every size.</Typography>
        </Paper></Grid>
        <Grid xs={12} md={6}><Paper sx={{p:4,height:'100%'}}>
          <Typography color="secondary" fontWeight={800}>MISSION</Typography>
          <Typography variant="h6" sx={{mt:1}}>Build reliable digital products that simplify work, connect people and accelerate growth.</Typography>
        </Paper></Grid>
      </Grid>
    </Box>
  </Container></Box>;
}