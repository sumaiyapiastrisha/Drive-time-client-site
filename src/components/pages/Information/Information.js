import React from 'react';
import Header from '../../Shared/Header';

const Information = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div className="container text-start mt-4 ">
                <img src="https://smarter-usa.org/wp-content/uploads/2018/03/page-banner.optimized.jpg" alt="" />
                <h2 className='text-success'>Rider Skills</h2>
                <p>
                    A big part of being a responsible rider is to be a skillful and proficient rider. In this section, you will find resources for becoming a better rider. Studies and reports regarding rider training are found in Research.
                </p>

                <h4 className='text-success'>Rider Education Resources for Safe Motorcycling</h4>
                <p>Start with Basics to Become a SMART and SKILLFUL Rider</p>
                <ol>
                    <li>Take an introductory skills-development course</li>
                    <li>Engage in independent study. Reading List <a href="#link-to-reading-list">here</a>.</li>
                    <li>Practice.</li>
                    <li>Take an intermediate skills-improvement course.</li>
                    <li>Ride a variety of bikes.</li>
                    <li>Ride off-road.</li>
                    <li>Attend a track school.</li>
                    <li>Repeat.</li>
                </ol>
                <p>
                    “Practice” is listed as the third step, after taking an introductory course and engaging in independent study. Why? Because practice makes permanent, and only by practicing perfectly does it become perfect. If you have not learned the “what” and the “how” through taking a course or by independent study, practice is of little value and will even be detrimental if it reinforces bad habits.
                </p>
                <p>
                    For a supplementary explanation about each of the above steps, read How to Enhance Your Street-Riding Skills. Here is a List of books which address learning to ride and enhancing your riding skills.
                </p>
                {/* Include links to additional sections or resources as needed */}
                <a id="link-to-reading-list" href="#reading-list-section">Link to Reading List</a>

                <h4 className='text-success'>Excellent Resources for Motorcycle Riders</h4>
                <ul>
                    <li><a href="https://www.becrashfree.com/" style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">Be Crash Free</a> - Web-based motorcycle rider membership program.</li>
                    <li><a href="https://www.youtube.com/user/kevinmorris22/videos" style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">MCrider.com</a> - Free online rider training videos by Kevin Morris.</li>
                    <li><a href="https://www.msf-usa.org/" style={{ textDecoration: 'none', color: 'green' }} style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">Motorcycle Safety Foundation (MSF)</a> - Comprehensive resource for novice and experienced riders.</li>
                    {/* Add more resources as needed */}
                </ul>

                <h4 className='text-success'>More Rider Training Opportunities</h4>
                <ul>
                    <li>American Motorsport Training</li>
                    <li>American Supercamp</li>
                    <li>California Superbike School – Keith Code</li>
                    {/* Add more training opportunities */}
                </ul>

                <h4 className='text-success'>Motorcycle Safety Tips and Techniques</h4>
                <ul>
                    <li><a href="#braking-article" style={{ textDecoration: 'none', color: 'green' }}  >2011 – A Study of Motorcycle Rider Braking Control Behavior</a></li>
                    <li><a href="#braking-update-article" style={{ textDecoration: 'none', color: 'green' }}>2021 – Braking Capabilities of Motorcyclists – An Update, Literature Review</a></li>
                    {/* Add more safety tips and techniques */}
                </ul>

                <div id="reading-list-section">
                    <h4 className='text-success'>Reading List</h4>
                    <ul>
                        <li><a href="https://www.example1.com" style={{ textDecoration: 'none', color: 'green' }} style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">Book Title 1</a></li>
                        <li><a href="https://www.example2.com" style={{ textDecoration: 'none', color: 'green' }} style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">Book Title 2</a></li>
                        {/* Add more reading list items as needed */}
                    </ul>
                </div>

                <div id="braking-article">
                    <h4 className='text-success'>Braking Article</h4>
                    <p>
                        The braking article provides valuable insights into effective braking techniques for motorcyclists. It discusses the importance of proper braking control behavior and offers practical tips to enhance rider safety.
                    </p>
                    <p>
                        For a detailed understanding, you can read the full article <a href="https://www.braking-article.com" style={{ textDecoration: 'none', color: 'green' }} style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>

                <div id="braking-update-article">
                    <h4 className='text-success'>Braking Update Article</h4>
                    <p>
                        In the braking update article, the latest research on the braking capabilities of motorcyclists is presented. The article reviews literature on deceleration, highlighting the difference between a motorcycle's braking capabilities and what an average rider can achieve.
                    </p>
                    <p>
                        For a comprehensive overview, you can access the article <a href="https://www.braking-update-article.com" style={{ textDecoration: 'none', color: 'green' }} style={{ textDecoration: 'none', color: 'green' }} target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Information;