import './blog.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Exploring Map Technologies: A Journey with MapLibre and Leaflet</h1>
      </header>

      <section className="blog-content">
        <h2>Challenges</h2>

        <p>
          Working on this challenge presented a few unique obstacles that I genuinely enjoyed tackling. I hadn't used Leaflet in years, nor had I worked with MapLibre or ArcGIS before. That said, I was excited for the opportunity to learn more about these technologies.
        </p>
        <p>
          I ran into some challenges with MapLibre after making progress, which ultimately led me to pivot to Leaflet. Initially, I struggled a bit with MapLibre because it's very JavaScript-centric, and it didn't align well with React's paradigm. While this wasn't inherently a negative thing, it did make the development process feel somewhat clunky. However, I appreciated the learning experience and stuck with it. I particularly enjoyed how easy it was to add event handlers and get map state details like latitude, longitude, and zoom level.
        </p>
  
        <p>
          Eventually, I needed to set up dynamic styles for my facility layers to differentiate between planned and active facilities. Unfortunately, MapLibre didn't support this out of the box (see the <a href="https://github.com/maplibre/maplibre-gl-js/issues/1235" target="_blank" rel="noopener noreferrer">open issue on GitHub</a>). This functionality is available in the paid version of Mapbox, but I ultimately decided to pivot to Leaflet to meet all the requirements for this project.
        </p>
        <p>
          Switching to Leaflet was a game-changer. Although Next.js imposed some quirky issues due to SSR (Server-Side Rendering), I found a simple workaround by wrapping my <code>&lt;Map /&gt;</code> component in <code>useMemo</code>. Once I was rolling with Leaflet, the development experience was smooth and enjoyable. The <a href="https://react-leaflet.js.org/" target="_blank" rel="noopener noreferrer">React-Leaflet</a> library provided a "React-friendly" approach, which made the entire process feel natural. Plus, it supported dynamic, data-driven styles for the facilities.
        </p>
        <p>
          One more feature I loved about Leaflet was the abundance of resources available for customizing the map's layers and themes. With that, I was able to finish the project and create a solution I was proud of.
        </p>

        <h2>Approach</h2>
        <p>
          I spent a considerable amount of time researching the different libraries and weighing their pros and cons. Eventually, I chose MapLibre for a few key reasons. Firstly, it renders maps using the graphics card, allowing it to run separately from JavaScript and making it incredibly fast. Secondly, it's essentially the free version of Mapbox, a highly reputable library with a wealth of tools and support.
        </p>
        <p>
          As this project was aimed at presenting information about bike facilities in Portland, I wanted to ensure SEO was a key consideration. For this, I chose Next.js, as it's known for its excellent SEO capabilities. While I have experience with Vue, my background in React made this the best fit for me. My ability to quickly pick up new technologies served me well throughout the process, and it was a great opportunity to further hone my skills. The tech industry is ever-evolving, so I always embrace the mindset of continuous learning.
        </p>
        <p>
          The application serves as an informational website, designed for users to explore active and planned bike routes, filter routes by classification, and learn more about facilities in Portland. I paid close attention to Alta Planning's branding, ensuring the primary and accent colors aligned with their style guide.
        </p>
        <p>
          Accessibility was also a top priority when designing the map. The facilities were rendered using accessible colors to ensure a broad range of users could interact with the map without difficulty:
        </p>
        <ul>
          <li><strong style={{background: '#4A90E2'}}>Sky Blue (#4A90E2)</strong> – Accessible for most types of color blindness.</li>
          <li><strong style={{background: '#8BC34A'}}>Lime Green (#8BC34A)</strong> – A vibrant color with high contrast against dark backgrounds.</li>
          <li><strong style={{background: '#FF9800'}}>Vivid Orange (#FF9800)</strong> – Highly visible and easily distinguishable, even for colorblind users.</li>
          <li><strong style={{background: '#D32F2F'}}>Crimson Red (#D32F2F)</strong> – Provides excellent contrast on dark backgrounds, though some types of color blindness may still find it challenging.</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>
          Overall, this challenge was a rewarding experience. I had the opportunity to explore new technologies, exercise my creativity, and consider important factors like accessibility. Most importantly, I worked on a project centered around a subject that is near and dear to my heart—bike facilities in Portland.
        </p>
      </section>
    </div>
  );
}

export default BlogPage;
