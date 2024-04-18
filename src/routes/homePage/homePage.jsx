import SearchBar from '../../components/searchBar/SearchBar.jsx';
import './homePage.scss';

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Fin Real Estate & Get Your Dream Place
                    </h1>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente molestiae amet sed a nihil expedita maiores
                        accusamus aperiam veritatis, aliquid eum numquam debitis
                        tenetur repellat atque quae tempora. Quibusdam,
                        necessitatibus.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="background heroshot" />
            </div>
        </div>
    );
};

export default HomePage;
