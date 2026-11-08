import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { HeroReel } from './HeroReel';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroReel"
        component={HeroReel}
        durationInFrames={450}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

registerRoot(RemotionRoot);
