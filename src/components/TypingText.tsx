'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingText: React.FC = () => {
  return (
    <div className="text-sm inline">
      <Typewriter
        options={{
            strings: [
                '<span class="text-slate-500 hover:text-blue-600">Present</span>'
              ],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </div>
  );
};

export default TypingText;