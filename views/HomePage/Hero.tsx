import Image from 'next/image'
import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero({ title, subtitle, image, primaryCta, secondaryCta }: { title:any, subtitle:any, tag:any, image:any, primaryCta:any, secondaryCta:any }) {
  return (
    <HeroWrapper>
      <Contents>
        {title && <Heading className=''>{title}</Heading>}
        <CustomOverTitle>от Viply</CustomOverTitle>
        {subtitle && <Description>
          {subtitle}
        </Description>}
        <CustomButtonGroup>
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
        </CustomButtonGroup>
      </Contents>
      {image && <ImageContainer>
        <Image
          src={image}
          alt="test"
          width="800"
          height="800"
        />
      </ImageContainer>}
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 55rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 4rem;
`;

const Heading = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
