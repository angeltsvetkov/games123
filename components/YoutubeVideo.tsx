import React from 'react';
import styled from 'styled-components';

interface YoutubeVideoProps {
  title?: string;
  url: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const { title, url } = props;

  return (
    <VideoContainer>
      <Video>
        <iframe width="1280" height="720" src={url + "?autoplay=1&controls=0&playlist=lcpPOdhA4tc&loop=1"} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </Video>
    </VideoContainer>
  );
}

export const VideoContainer = styled.div`
  display: block;
  border-radius: 20px;
  margin: auto;
  width: 70%;
  aspect-ratio: 16 / 9;
  width: 100%;
`;
export const Video = styled.div`
  width: 100%;
  margin-left: 15%;
`;
