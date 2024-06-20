
import React from 'react';
import HeroBanner from '../../stories/HeroBanner';

export default function Page() {
    return (
    <div className='flex flex-col'>
    <HeroBanner
      title="workspace"
      subtitle="around the"
      description='This text is from storybook herobanner'
    />
    <div>this is sample one</div>
  </div>)
  }