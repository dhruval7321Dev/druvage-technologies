import { Card, CardContent, Typography, Box } from '@mui/material';
import type { ReactNode } from 'react';
import React from 'react';
export default function ServiceCard({
  icon,title,text
}: { icon:ReactNode; title:string; text:string }) {
  return (
    <Card sx={{height:'100%',transition:'.25s',
      '&:hover':{transform:'translateY(-6px)',boxShadow:'0 18px 45px rgba(15,23,42,.10)',borderColor:'#C7D2FE'}}}>
      <CardContent sx={{p:3.5}}>
        <Box sx={{width:52,height:52,borderRadius:3,display:'grid',placeItems:'center',
          background:'#EEF2FF',color:'primary.main',mb:3}}>{icon}</Box>
        <Typography variant="h5" sx={{fontWeight:800,mb:1.2}}>{title}</Typography>
        <Typography color="text.secondary" sx={{lineHeight:1.8}}>{text}</Typography>
      </CardContent>
    </Card>
  );
}