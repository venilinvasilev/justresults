import styles from './Home.module.css';

function Home() {
    return (
        <section>
            <h1 className={styles.homeHeading}>Popular Workouts</h1>
            <div className={styles.sectionsWrapper}>
                <div className={styles.popularArticle}>
                    <h2 className={styles.articleHeader}>Intermittent Fasting: Fat-Burning Blitz</h2>
                    <p className={styles.shortDescription}>
                        Two things in particular are very important to me: Eating the foods I love and
                        staying lean.
                        If I feel like eating donuts, I eat donuts. When I want a beer, a margarita or a
                        sake bomb, I imbibe. If I'm at a restaurant, I'll get a steak and some delicious
                        sides, then finish it off with dessert. In other words, I eat what I want, when I
                        want it. (Within reason, of course.)
                    </p>
                </div>
                <div className={styles.popularArticle}>
                    <h2 className={styles.articleHeader}>Intermittent Fasting: Fat-Burning Blitz</h2>
                    <p className={styles.shortDescription}>
                        Two things in particular are very important to me: Eating the foods I love and
                        staying lean.
                        If I feel like eating donuts, I eat donuts. When I want a beer, a margarita or a
                        sake bomb, I imbibe. If I'm at a restaurant, I'll get a steak and some delicious
                        sides, then finish it off with dessert. In other words, I eat what I want, when I
                        want it. (Within reason, of course.)
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;