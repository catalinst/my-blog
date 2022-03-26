import styles from './Personal.module.css';
import Image from 'next/image';

const Personal = () => {
  return (
    <section className={styles.personal}>
      <div className={styles.image}>
        <Image
          src={'/images/me.jpg'}
          alt={'An image with me, Cata'}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi & welcome, I'm Catalin</h1>
      <p>
        This blog was made with Next.js and will provide good
        posts about programming and any topics.
      </p>
    </section>
  );
};

export default Personal;
