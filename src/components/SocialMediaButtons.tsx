
import React from 'react';
import { LinkedInButton } from './LinkedInButton';
import { GitHubButton } from './GitHubButton';
import { MediumButton } from './MediumButton';

export function SocialMediaButtons() {
  return (
    <div className="social-buttons-container">
      <div className="flex gap-4">
        <LinkedInButton href="https://www.linkedin.com/in/betuec/" />
        <GitHubButton href="https://github.com/crha-hFiecif" />
        <MediumButton href="https://medium.com/@eebuk_tech" />
      </div>
    </div>
  );
}
