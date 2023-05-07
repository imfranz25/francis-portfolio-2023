import React from 'react';
import { ACCOMPLISHMENTS } from '../../constants/accomplishments';

import { Section, SectionDivider, SectionTitle } from '../UI/Section';
import { Box, Boxes, BoxNum, BoxText } from './styles';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {ACCOMPLISHMENTS.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
