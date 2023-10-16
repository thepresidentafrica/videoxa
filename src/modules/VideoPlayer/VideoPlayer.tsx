import React, { useRef, useEffect } from 'react';

type VideoPlayerProps = React.VideoHTMLAttributes<HTMLVideoElement>;

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Add any additional logic or event listeners here
      // For example, you can add an event listener for the 'ended' event
      videoElement.addEventListener('ended', () => {
        console.log('Video ended');
      });
    }

    return () => {
      if (videoElement) {
        // Clean up any event listeners when the component unmounts
        videoElement.removeEventListener('ended', () => {
          console.log('Video ended');
        });
      }
    };
  }, []);

  return (
    <video ref={videoRef} {...props} />
  );
};

export default VideoPlayer;