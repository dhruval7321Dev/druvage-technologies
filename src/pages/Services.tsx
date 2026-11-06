import { Box, Container, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ApiIcon from '@mui/icons-material/Api';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import React from 'react';

const items = [
  ['Web Application Development','Modern responsive web applications, admin panels, portals and SaaS platforms.','web'],
  ['Mobile App Development','Android and cross-platform mobile applications with clean UX and reliable data flows.','mobile'],
  ['UI/UX Design','User-centered interfaces and design systems that make complex products easier to use.','design'],
  ['Cloud & Backend','APIs, authentication, databases, deployment architecture and scalable backend services.','cloud'],
  ['AI & Automation','AI-powered features, document workflows and automation that improve business productivity.','ai'],
  ['API & Integration','Connect your products with third-party services, payment systems, communication tools and business APIs.','api']
] as const;

const icons:any = {
  web:<CodeIcon/>, mobile:<PhoneAndroidIcon/>, design:<DesignServicesIcon/>,
  cloud:<CloudQueueIcon/>, ai:<AutoAwesomeIcon/>, api:<ApiIcon/>
};

export default function Services(){
  return <Box className="section"><Container maxWidth="lg">
    <SectionTitle eyebrow="Services" title="From idea to production, we build the technology layer."
      description="Choose a focused service or combine multiple capabilities into an end-to-end product development engagement."/>
    <Grid container spacing={3}>
      {items.map(([title,text,key])=><Grid xs={12} sm={6} md={4}  key={title}>
        <ServiceCard icon={icons[key]} title={title} text={text}/>
      </Grid>)}
    </Grid>
  </Container></Box>
}