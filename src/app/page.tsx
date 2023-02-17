import styles from './page.module.css';

export default function Home() {
  type Post = {
    _id: number;
    title: string;
    subtitle: string;
    content: string;
    createdAt: Date;
    updatedAt: Date | null;
  };

  const sampleNewsData: Array<Post> = [
    {
      _id: 1,
      title: 'Latest Platform for Blacks in Tech!',
      subtitle: 'Why Black and Techy is the coolest new platform on the block.',
      content: `
        <h1>Hello World</h1>
      `,
      createdAt: new Date(2023, 1, 13),
      updatedAt: null,
    },
  ];

  const samplePostsData: Array<Post> = [
    {
      _id: 1,
      title: 'Welcome to Black and Techy!',
      subtitle: 'Why Black and Techy is the coolest new platform on the block.',
      content: `
        <h1>Hello World</h1>
      `,
      createdAt: new Date(2023, 1, 13),
      updatedAt: null,
    },
  ];

  return (
    <div>
      <div className={styles.jumbotron}>
        <h1>Welcome to Black and Techy</h1>
      </div>
      <div className={styles['cta-section']}>
        <h2>Be a Part of the Community!</h2>
        <button>Join Today</button>
      </div>
      <div className={styles['content-section']}>
        <h3>Latest News</h3>
        <div>
          {sampleNewsData.map((newsPost: Post) => {
            return (
              <div key={newsPost._id} className={styles['news-post']}>
                <h4>{newsPost.title}</h4>
                <h5>{newsPost.subtitle}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles['content-section']}>
        <h3>Popular Posts</h3>
        <div>
          {samplePostsData.map((post: Post) => {
            return (
              <div key={post._id} className={styles.post}>
                <h4>{post.title}</h4>
                <h5>{post.subtitle}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
