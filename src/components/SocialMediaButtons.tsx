// import React from 'react';
// import { LinkedInButton } from './LinkedInButton';
// import { GitHubButton } from './GitHubButton';
// import { MediumButton } from './MediumButton';


// export function SocialMediaButtons() {
//   return (
//     <div className="social-buttons-container">
//       <div className="flex gap-4">
//         <LinkedInButton href="https://www.linkedin.com/" />

//         <GitHubButton href="https://github.com/Cma-png" />

//         <MediumButton href="https://medium.com/be-12s-tech-travel-study-logs" />
//         <a
//           href="mailto:hing-ling.shum@connect.polyu.hk"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="button-89" role="button">
//             <i className="fa fa-envelope fa-2x"></i>
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { LinkedInButton } from './LinkedInButton';
// import { GitHubButton } from './GitHubButton';
// import { MediumButton } from './MediumButton';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// export function SocialMediaButtons() {
//   return (
//     <div className="social-buttons-container">
//       <div className="flex gap-4">
//         <LinkedInButton href="https://www.linkedin.com/" />

//         <GitHubButton href="https://github.com/Cma-png" />

//         <MediumButton href="https://medium.com/be-12s-tech-travel-study-logs" />
        
//       </div>
//     </div>
//   );
// }

import React from 'react';
// import { LinkedInButton } from './LinkedInButton';
import { GitHubButton } from './GitHubButton';
import { MediumButton } from './MediumButton';

export function SocialMediaButtons() {
  return (
    <div className="social-buttons-container">
      <div className="flex gap-4">
        {/* <LinkedInButton href="https://www.linkedin.com/" /> */}
        <GitHubButton href="https://github.com/Cma-png" />
        <MediumButton href="https://medium.com/be-12s-tech-travel-study-logs" />
      </div>
    </div>
  );
}
