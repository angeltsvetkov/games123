import styled from 'styled-components';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import GameCard from 'components/GameCard';
import OverTitle from 'components/OverTitle';
import { getImageUrl } from 'utils/getImageUrl';
import { media } from 'utils/media';

export default function Games({ list, primaryCta }: { list: any, primaryCta: any }) {
  return (
    <GamesWrapper id="games">
      <Contents>
        {list.map((game: any, idx: any) => {
          return (
            <GameCard key={idx} title={game?.fields?.title} imageUrl={getImageUrl(game?.fields?.image)!}></GameCard>
          )
        })}
        <CTAWrapper>
        {primaryCta && <ButtonLink url={primaryCta?.url} label={primaryCta?.label} type="normal"></ButtonLink>}
        </CTAWrapper>
      </Contents>
    </GamesWrapper>
  );
}

const GamesWrapper = styled(Container)`
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
  max-width: 100%;

  ${media('<=desktop')} {
    max-width: 100%;
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
  margin-bottom: 2rem;
`;

const CTAWrapper = styled.p`
  padding-top: 20px;
`;

const Heading = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
