import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>
        Creative Thoughts Agency.
      </h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, pariatur veritatis
        reprehenderit explicabo praesentium ut eius id aut delectus obcaecati eos tenetur,
        doloribus molestiae accusantium. Enim tempora aspernatur saepe et.15
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
        {/* <Link href="/resume.pdf" download="resume.pdf" className={styles.button}> */}
        <a href='/resume.pdf' download="resume.pdf" className={styles.button} >
            Download Resume
        </a>
        {/* </Link> */}
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" className={styles.brandImg} alt='brands' fill />
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src='/hero.gif' alt='' fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;