import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../utils/colors';
import styled from '@emotion/styled';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import EngineeringIcon from '@mui/icons-material/Engineering';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function About() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        overflow: 'hidden',
        bgcolor: colors.apricot[900],
        backgroundImage: 'url("/img/unsplash6.jpg")',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container
        sx={{
          mt: 15,
          mb: 30,
          display: 'flex',
          position: 'relative',
          color: colors.white[500],
        }}
      >
        {/* <Box
          component="img"
          src="/img/bg.jpg"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        /> */}
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              {/* <Box
                component="img"
                src="🚀"
                alt="suitcase"
                sx={{ height: 55 }}
              /> */}
              <Icon>
                <RocketLaunchIcon />
              </Icon>
              <Title variant="h2" sx={{ my: 5 }}>
                Exploration
              </Title>
              <Body>
                {
                  'We are explorers at heart, driven by an insatiable curiosity about the cosmos. We believe that exploration is not just a journey to distant planets but a mindset that fuels innovation, discovery, and the pursuit of knowledge.'
                }
              </Body>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Icon>
                <AllInclusiveIcon />
              </Icon>
              <Title variant="h2" sx={{ my: 5 }}>
                Inclusivity
              </Title>
              <Body>
                {
                  'The cosmos belongs to all of us. We are dedicated to fostering a culture of inclusivity, where everyone, regardless of background, is welcome to join us in the wonders of space travel and exploration.'
                }
              </Body>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Icon>
                <EngineeringIcon />
              </Icon>
              <Title variant="h2" sx={{ my: 5 }}>
                Community
              </Title>
              <Body>
                {
                  'Our space travel community is a source of strength and support. We foster a sense of belonging among our passengers, crew, and space enthusiasts, uniting us in our shared love for the cosmos.'
                }
              </Body>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const Title = styled(Typography)({
  fontSize: '2rem',
  fontFamily: 'IBM Plex Serif',
  fontWeight: 700,
});

const Body = styled(Typography)({
  fontSize: '1.2rem',
  fontFamily: 'IBM Plex Mono',
  fontWeight: 300,
  textAlign: 'center',
});

const Icon = styled(Box)({
  svg: {
    width: '60px',
    height: '60px',
  },
});

export default About;
