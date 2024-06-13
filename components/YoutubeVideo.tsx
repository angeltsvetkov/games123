import React from 'react';
import YouTube from 'react-youtube';
import styles from 'app/ui/YoutubeVideo.module.css';

const YoutubeVideo = ({ videoId }: { videoId: string }) => {
  // Set up event handlers
  const onReady = (event: any) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error: any) => {
    console.error('YouTube Player Error:', error);
  };

  const opts = {
    height: '728',
    width: '1280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    },
  };

  return (
    <div className={styles.videoplayer}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onError={onError}
      />
    </div>
  );
};

export default YoutubeVideo;
