'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypingText() {
  return (
    <span className="text-sm inline-block text-accent-light">
      <Typewriter
        options={{
          strings: ['Present'],
          autoStart: true,
          loop: true,
          cursor: '_',
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </span>
  );
}