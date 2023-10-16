import React from 'react';
import { VideoPlayer } from './modules';

const App: React.FC = () => {
  return (
    <div>
      <h1>Videoxa</h1>
      <VideoPlayer src="/v.mp4" controls autoPlay contextMenu='welcome' width={400} height={400} slot='1' />
    </div>
  );
};

export default App;