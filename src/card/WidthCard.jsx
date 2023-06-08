import { useState, useEffect } from "react";
import "./FlipCard.css"; // Import CSS for styling

const WidthCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = scrollTop + windowHeight;

      // Calculate the scroll progress as a percentage
      const scrollProgress = (scrollBottom / documentHeight) * 100;

      // Calculate the desired opacity based on the scroll progress
      const desiredOpacity = Math.min(scrollProgress / 100, 1);

      setOpacity(desiredOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="mx-auto max-w-4xl py-3">
        <div
          className={`flip-card ${isFlipped ? "flipped" : ""}`}
          onClick={handleClick}
        >
          <div className="flip-card-inner h-96">
            <div className="flip-card-front overflow-hidden rounded-3xl border">
              {/* Front side content */}
              <img
                src="https://plus.unsplash.com/premium_photo-1677528816936-441c92607bae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="h-56 w-full object-cover"
              />

              <div className="p-20">This is front side</div>
            </div>
            <div className="flip-card-back flex flex-col justify-center overflow-hidden rounded-3xl border p-20">
              {/* Back side content */}
              <h4 className="text-xl font-bold">This is title</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quae voluptate voluptas
                quod voluptatem quos doloribus quidem natus. Quisquam
                voluptatum, /
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-screen bg-red-500"
        style={{ opacity: opacity, transition: "opacity 0.5s" }}
      >
        dwadwadaw
      </div>
    </div>
  );
};

export default WidthCard;
