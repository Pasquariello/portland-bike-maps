import styles from'./notes.module.css';

const NotesPage = () => {
  return (
    <div className={styles.noteContainer}>
      <header className={styles.noteHeader}>
        <h1>Exploring Map Technologies</h1>
      </header>

      <section className={styles.noteContent}>
        <h2>Approach</h2>
        <p>
          As this project was aimed at presenting information about bike facilities in Portland, I wanted to ensure SEO was a key consideration. For this, I chose Next.js, as it&apos;s known for its excellent SEO capabilities. I built this site with mobile views in mind making sure all pages are mobile responsive, including the navigation elements. While I have experience with Vue, my more extensive background in React made using NextJS the best fit for me. My ability to quickly pick up new technologies served me well throughout the process, and it was a great opportunity to further hone my skills. The tech industry is ever-evolving, so I always embrace the mindset of continuous learning.
        </p>
        <p>
          The application serves as an informational website, designed for users to explore active and planned bike routes, filter routes by classification, and learn more about facilities in Portland. I paid close attention to Alta Planning + Design&apos;s branding, ensuring the primary and accent colors aligned with their style guide as well as header and content fonts.
        </p>
        <p>
          Accessibility was also a top priority when designing the map. The facilities were rendered using accessible colors to ensure a broad range of users could interact with the map without difficulty:
        </p>
        <ul className={styles.notesUlList}>
          <li><strong className={styles.pill} style={{background: '#4A90E2'}}>Sky Blue (#4A90E2)</strong> - Accessible for most types of color blindness.</li>
          <li><strong className={styles.pill} style={{background: '#8BC34A'}}>Lime Green (#8BC34A)</strong> - A vibrant color with high contrast against dark backgrounds.</li>
          <li><strong className={styles.pill} style={{background: '#FF9800'}}>Vivid Orange (#FF9800)</strong> - Highly visible and easily distinguishable, even for colorblind users.</li>
          <li><strong className={styles.pill} style={{background: '#D32F2F'}}>Crimson Red (#D32F2F)</strong> - Provides excellent contrast on dark backgrounds.</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>
          Overall, this challenge was a rewarding experience. I had the opportunity to explore new technologies, exercise my creativity, and consider important factors like accessibility. Most importantly, I worked on a project centered around a subject that is near and dear to my heart—bike facilities in Portland.
        </p>
      </section>
    </div>
  );
}

export default NotesPage;
