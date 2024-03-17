import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta({title, tag, content, primaryCta, secondaryCta }) {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>{tag}</OverTitle>
          <SectionTitle>{title}</SectionTitle>
          <Description>
            {content}
          </Description>
          <ButtonGroup>
          {primaryCta && <NextLink href={primaryCta?.url} passHref>
            <Button>
              {primaryCta?.label}
            </Button>
          </NextLink>}
          {secondaryCta && <NextLink href={secondaryCta?.url} passHref>
            <Button transparent>
              {secondaryCta?.label}
            </Button>
          </NextLink>}
        </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
