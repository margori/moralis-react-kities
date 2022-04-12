import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Kitty from '../../components/Kitty/Kitty';
import { defaultDNA } from '../../utils/dna';

const PageContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const PageCard = styled(Card)`
  padding: 10px;
`;

const Create = () => {
  return (
    <PageContainer fluid={true} className="text-center">
      <PageCard>
        <Kitty dna={defaultDNA} />
      </PageCard>
    </PageContainer>
  );
};

export default Create;
