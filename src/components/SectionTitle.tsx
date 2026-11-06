import { Box, Typography } from '@mui/material';
import React from 'react';
export default function SectionTitle({
  eyebrow, title, description
}: { eyebrow:string; title:string; description?:string }) {
  return (
    <Box sx={{mb:6, maxWidth:760}}>
      <Typography sx={{color:'primary.main',fontWeight:800,letterSpacing:1.5,fontSize:13,textTransform:'uppercase'}}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{mt:1.2,fontSize:{xs:34,md:46}}}>{title}</Typography>
      {description && (
        <Typography sx={{mt:2,color:'text.secondary',fontSize:17,lineHeight:1.8}}>
          {description}
        </Typography>
      )}
    </Box>
  );
}