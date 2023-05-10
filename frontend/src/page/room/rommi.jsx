import { JitsiMeeting } from '@jitsi/react-sdk';
import Loader from '../../Components/Loader';
import React, { useState } from 'react';

const Roomi = () => {
  return (
    <div>
      <JitsiMeeting
    roomName = { 'MOMO' }
    getIFrameRef = { node => node.style.height = '800px' }
/>
    </div>
  );
};

export default Roomi;
