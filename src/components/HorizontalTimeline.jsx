"use client"; // Add this line at the top

import React, { useEffect } from 'react';
import './HorizontalTimeline.css';

const HorizontalTimeline = () => {
  useEffect(() => {
    // ... (existing code for initializing the timeline)
  }, []);

  return (
    <div className="mx-auto my-20">
      <section className="cd-horizontal-timeline">
        <div className="timeline">
          <div className="events-wrapper">
            <div className="events">
              <ol>
                <li><a href="#0" data-date="01/01/2019" className="selected">01 Jan 2019</a></li>
                <li><a href="#0" data-date="15/06/2019">15 Jun 2019</a></li>
                <li><a href="#0" data-date="01/09/2021">01 Sep 2021</a></li>
                <li><a href="#0" data-date="01/06/2022">01 Jun 2022</a></li>
                <li><a href="#0" data-date="01/02/2023">01 Feb 2023</a></li>
                <li><a href="#0" data-date="01/07/2023">01 Jul 2023</a></li>
                <li><a href="#0" data-date="01/09/2023">01 Sep 2023</a></li>
                <li><a href="#0" data-date="01/12/2023">01 Dec 2023</a></li>
              </ol>
              <span className="filling-line" aria-hidden="true"></span>
            </div>
          </div>
          <ul className="cd-timeline-navigation">
            <li>
              <a href="#0" className="prev inactive">
                Prev
              </a>
            </li>
            <li>
              <a href="#0" className="next">
                Next
              </a>
            </li>
          </ul>
        </div>
        <div className="events-content">
          <ol>
            <li className="selected" data-date="01/01/2019">
              <h2>Event 1</h2>
              <em>January 1st, 2019</em>
              <p>Description of Event 1 goes here.</p>
            </li>

            <li data-date="15/06/2019">
              <h2>Event 2</h2>
              <em>June 15th, 2019</em>
              <p>Description of Event 2 goes here.</p>
            </li>

            {/* Add more event content as needed */}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default HorizontalTimeline;