import './App.css';

function App() {
    return (
        <div className="bg-image">
            <div className="site-wrapper">
                <header>
                    <div className="header-container">
                        <div className="site-logo">#GymTips</div>
                        <nav>
                            <a className="site-nav-link" href="index.html">Home</a>
                            <a className="site-nav-link" href="index.html">Workouts</a>
                            <a className="site-nav-link" href="index.html">Tips</a>
                            <a className="site-nav-link" href="index.html">Calculator</a>
                        </nav>
                    </div>
                </header>
                <hr className="separation-line" />
                <div className="site-content">
                    <h1 className="home-heading">Popular Tips</h1>
                    <section>
                        <div className="sections-wrapper">
                            <div className="popular-article">
                                <h2 className="article-header">Intermittent Fasting: Fat-Burning Blitz</h2>
                                <p className="short-description">
                                    Two things in particular are very important to me: Eating the foods I love and
                                    staying lean.
                                    If I feel like eating donuts, I eat donuts. When I want a beer, a margarita or a
                                    sake bomb, I imbibe. If I'm at a restaurant, I'll get a steak and some delicious
                                    sides, then finish it off with dessert. In other words, I eat what I want, when I
                                    want it. (Within reason, of course.)
                                </p>
                            </div>
                            <div className="popular-article">
                                <h2 className="article-header">Intermittent Fasting: Fat-Burning Blitz</h2>
                                <p className="short-description">
                                    Two things in particular are very important to me: Eating the foods I love and
                                    staying lean.
                                    If I feel like eating donuts, I eat donuts. When I want a beer, a margarita or a
                                    sake bomb, I imbibe. If I'm at a restaurant, I'll get a steak and some delicious
                                    sides, then finish it off with dessert. In other words, I eat what I want, when I
                                    want it. (Within reason, of course.)
                                </p>
                            </div>
                            <div className="popular-article">
                                <h2 className="article-header">Intermittent Fasting: Fat-Burning Blitz</h2>
                                <p className="short-description">
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
                </div>
            </div>
            <footer>
                <div className="site-footer">
                    <p>Site created by Venko Zmeya All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
