import BannerBackground from "../../assets/banner-bg.svg?react";
import "./banner.css";

function Banner() {
    return (
        <section className="banner">
            <h1 className="title">The Rick and Morty API</h1>
            <div className="banner-bg">
                <BannerBackground
                    width="100%"
                    height="100%"
                    fill="#f5f5f5"
                />
            </div>
        </section>
    );
}

export default Banner;
