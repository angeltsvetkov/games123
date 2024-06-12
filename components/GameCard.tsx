import NextImage from 'next/image';
import NextLink from 'next/link';
import styled from 'styled-components';
import { media } from 'utils/media';
import ReactStars from 'react-stars'

export interface GameCardProps {
  title: string;
  imageUrl: string;
}

export default function GameCard({ title, imageUrl }: GameCardProps) {
  return (
    <GameCardWrapper className="game-card-wrapper">
      <HoverEffectContainer>
        <ImageContainer>
          <NextImage src={imageUrl} layout="fill" objectFit="cover" alt={title} />
        </ImageContainer>
        <Content>
          <Title>{title}</Title>
          {/* <Description>{description}</Description> */}
          <ReactStars
            count={5}
            size={24}
            color1={'#ffd701'} />
        </Content>
      </HoverEffectContainer>
    </GameCardWrapper>
  );
}

const GameCardWrapper = styled.a`
  display: inline-block;
  margin: 0.5rem;
  height: 38rem;
  width: 40rem;
  overflow: hidden;
  text-decoration: none;
  border-radius: 1rem;
  background: rgb(var(--cardBackground));
  cursor: pointer;
  color: rgb(var(--text));
  border: solid #8080803b 1px;
`;

const HoverEffectContainer = styled.div`
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 25rem;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 0 2rem;

  & > * {
    margin-top: 2rem;
  }
`;

const Title = styled.h4`
  font-size: 1.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Description = styled.p`
  font-size: 1.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;
