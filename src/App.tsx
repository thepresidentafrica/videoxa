import React from 'react';
import { HeroModule } from './modules';

const App: React.FC = () => {
  return (
    <div>
      <HeroModule/>
      {/* <VideoPlayer autoPlay={true}  playsInline={true} src="/v.mp4" muted={false} controls={true} contextMenu='welcome' width={400} height={400} slot='1' /> */}
    </div>
  );
};

export default App;