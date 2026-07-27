import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Handle room search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">

            {/* ================= HEADER / HERO SECTION ================= */}
            <section>
                <header className="header-banner">
                    <img
                        src="./assets/images/hotel.webp"
                        alt="StayEase Hotel"
                        className="header-image"
                    />

                    <div className="overlay"></div>

                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="phegon-color">StayEase Hotel</span>
                        </h1>

                        <h3>Experience Luxury, Comfort & Memorable Hospitality</h3>
                    </div>
                </header>
            </section>

            {/* ================= SEARCH ROOMS ================= */}

            <RoomSearch handleSearchResult={handleSearchResult} />

            <RoomResult roomSearchResults={roomSearchResults} />

            {/* ================= VIEW ALL ROOMS ================= */}

            <h4>
                <a className="view-rooms-home" href="/rooms">
                    View All Rooms
                </a>
            </h4>

            {/* ================= SERVICES ================= */}

            <h2 className="home-services">
                Services at <span className="phegon-color">StayEase Hotel</span>
            </h2>

            <section className="service-section">

                <div className="service-card">
                    <img
                        src="./assets/images/ac.png"
                        alt="Air Conditioning"
                    />

                    <div className="service-details">
                        <h3 className="service-title">
                            Air Conditioning
                        </h3>

                        <p className="service-description">
                            Enjoy cool and refreshing air-conditioned rooms for
                            maximum comfort throughout your stay.
                        </p>
                    </div>
                </div>

                <div className="service-card">
                    <img
                        src="./assets/images/mini-bar.png"
                        alt="Mini Bar"
                    />

                    <div className="service-details">
                        <h3 className="service-title">
                            Mini Bar
                        </h3>

                        <p className="service-description">
                            Complimentary beverages and snacks are available in
                            every premium room.
                        </p>
                    </div>
                </div>

                <div className="service-card">
                    <img
                        src="./assets/images/parking.png"
                        alt="Parking"
                    />

                    <div className="service-details">
                        <h3 className="service-title">
                            Secure Parking
                        </h3>

                        <p className="service-description">
                            Spacious and secure parking facility available for
                            all our guests, 24×7.
                        </p>
                    </div>
                </div>

                <div className="service-card">
                    <img
                        src="./assets/images/wifi.png"
                        alt="WiFi"
                    />

                    <div className="service-details">
                        <h3 className="service-title">
                            Free High-Speed Wi-Fi
                        </h3>

                        <p className="service-description">
                            Stay connected with complimentary high-speed Wi-Fi
                            throughout the hotel.
                        </p>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default HomePage;