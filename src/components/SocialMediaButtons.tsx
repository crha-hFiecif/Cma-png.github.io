
import React from 'react';
import { LinkedInButton } from './LinkedInButton';
import { GitHubButton } from './GitHubButton';
import { MediumButton } from './MediumButton';

export function SocialMediaButtons() {
  return (
    <div className="social-buttons-container">
      <div className="flex gap-4">
        <LinkedInButton href="https://www.linkedin.com/" />
        <GitHubButton href="https://github.com/Cma-png" />
        <MediumButton href="https://medium.com/be-12s-tech-travel-study-logs" />
      </div>
    </div>
  );
}
