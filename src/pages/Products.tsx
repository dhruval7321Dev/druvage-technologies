import { Box, Container, Grid } from '@mui/material';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

const products = [
  {title:'Druvage Business Suite',text:'A flexible platform concept for managing business operations, users, workflows and reporting from one place.',tags:['React','MUI','APIs']},
  {title:'Druvage Field App',text:'Mobile-first workflow solution for teams working in the field, with forms, task tracking and data synchronization.',tags:['Mobile','Offline','Cloud']},
  {title:'Druvage AI Assist',text:'An intelligent automation layer for document processing, knowledge workflows and repetitive business tasks.',tags:['AI','Automation','API']},
  {title:'Custom Digital Products',text:'Purpose-built applications designed around unique business requirements, processes and customer experiences.',tags:['Custom','SaaS','Scalable']}
];
import React from 'react';
export default function Products(){
  return <Box className="section"><Container maxWidth="lg">
    <SectionTitle eyebrow="Products" title="Products built to solve real business problems."
      description="Our product direction spans business software, mobile workflows and intelligent automation. Product names and modules can be tailored as your portfolio grows."/>
    <Grid container spacing={3}>
      {products.map(p=><Grid xs={12} sm={6} key={p.title}><ProductCard {...p}/></Grid>)}
    </Grid>
  </Container></Box>
}