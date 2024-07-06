import Image from 'next/image'
import styled from 'styled-components';
import ButtonGroup from 'components/ButtonGroup';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';
import Button from 'components/Button';
export default function Hero({ title, subtitle, image, primaryCta, secondaryCta, price, pricingHint }: { title: any, subtitle: any, tag: any, image: any, primaryCta: any, secondaryCta: any, price: any, pricingHint: any }) {

  return (
    <HeroWrapper>
      <Contents>
        {title && <Heading className=''>{title}</Heading>}
        <CustomOverTitle>от Viply</CustomOverTitle>
        {subtitle && <Description>
          {subtitle}
        </Description>}
        <Price>{price}</Price>
        <PriceHint>{pricingHint}</PriceHint>
        <CustomButtonGroup>
          {primaryCta && <ButtonLink url={primaryCta?.url} label={primaryCta?.label} type="normal"></ButtonLink>}
          {secondaryCta && <ButtonLink url={secondaryCta.url} label={secondaryCta?.label} type="outlined"></ButtonLink>}
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


const Price = styled.div`
  margin-top: 4rem;
  font-size: xxx-large;
  color: #707070;
  font-weight: 700;
`;

const PriceHint = styled.div`
  font-size: large;
  color: #70707087;
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
