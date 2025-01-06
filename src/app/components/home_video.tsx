import './home_video.css';

export default function HomeVideo() {
    return (
        <>
            <div className="home-video-container">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    preload="auto" 
                    playsInline
                >
                    <source src="./home_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="home-video-overlay"></div> {/* Transparent black overlay */}
            </div>
        </>
    );
}
