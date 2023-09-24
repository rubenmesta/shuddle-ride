import logo from './logo.svg';
import './App.css';
import { Hero, Card, Section, Button, SearchForm } from 'odyssey-design-system';
import { Box, Typography } from '@mui/material';
import { colors } from './utils/colors';
import { cards, sections } from './data';
import styled from '@emotion/styled';

import Layout from './components/Layout';
import About from './components/About';

function App() {
  return (
    <Layout>
      <Hero
        variant="medium"
        backgroundColor={colors.black[800]}
        image={'/img/unsplash6.jpg'}
        title={'Journey to the Stars'}
        subtitle={'Experience the Future of Travel with Space Trains'}
        secondaryCta={'Explore'}
        secondaryCtaVariant={'purple'}
        contentAlignment="center"
        search={false}
        overlay
      />
      <SearchForm
        title="Seach your next adventure"
        backgroundColor={colors.purple[100]}
        height={200}
        buttonVariant={'purple'}
        focusColor={colors.black[800]}
        destinationLabel={'Departure'}
        startDateLabel={'From'}
        endDateLabel={'Return'}
        travelersLabel={'Passengers'}
      />
      <CardsWrapper>
        <Typography variant="h4" fontFamily={'Anton'} ml={'2.5rem'}>
          Most Popular Destinatoins
        </Typography>
        <CardsContainer>
          {cards.map((card) => {
            return (
              <Card
                image={card.image}
                title={card.title}
                body={card.body}
                buttonText={card.buttonText}
                variant={card.variant}
              />
            );
          })}
        </CardsContainer>
      </CardsWrapper>

      <About />
      {sections.map((section) => {
        return (
          <Section
            image={section.image}
            title={section.title}
            body={section.body}
            buttonText={section.buttonText}
            flip={section.flip}
            variant={section.variant}
          />
        );
      })}
    </Layout>
  );
}

const CardsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '8rem auto',
  gap: '2rem',
  justifyContent: 'center',
  maxWidth: '1200px',
});

const CardsContainer = styled.div({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
});

export default App;
