import { Button, Card, CardContent, Chip, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
export default function ProductCard({
  title,text,tags
}: { title:string; text:string; tags:string[] }) {
  return (
    <Card sx={{height:'100%',overflow:'hidden',background:'linear-gradient(180deg,#fff,#F8FAFC)'}}>
      <Box sx={{height:8,background:'linear-gradient(90deg,#4F46E5,#06B6D4)'}} />
      <CardContent sx={{p:3.5}}>
        <Typography variant="h5" sx={{fontWeight:850}}>{title}</Typography>
        <Typography color="text.secondary" sx={{mt:1.5,lineHeight:1.8}}>{text}</Typography>
        <Box sx={{display:'flex',gap:1,flexWrap:'wrap',mt:2.5}}>
          {tags.map(t=><Chip key={t} label={t} size="small" />)}
        </Box>
        <Button endIcon={<ArrowForwardIcon/>} sx={{mt:3,p:0}}>Learn more</Button>
      </CardContent>
    </Card>
  );
}