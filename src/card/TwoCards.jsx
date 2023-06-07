import { useState } from "react";
import { motion } from "framer-motion";
import { cardData } from "../Data";
import { fadeUpScroll } from "../components/Animtaion.jsx";

const TwoCards = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (cardId) => {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter((id) => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  const container = {
    offscreen: {
      opacity: 1,
      scale: 0,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  //   const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id="values"
      initial="offscreen"
      whileInView="onscreen"
      className="mx-auto max-w-4xl"
    >
      <motion.div
        variants={container}
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {cardData.map((card) => {
          const isFlipped = flippedCards.includes(card.id);
          return (
            <motion.div
              key={card.id}
              className={`card  ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleCardClick(card.id)}
              whileHover={{ scale: 1.01 }}
              variants={fadeUpScroll}
            >
              <div className="card-inner h-[40rem] ">
                <div className="front overflow-hidden rounded-3xl border">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-5">
                    <h1 className="text-2xl font-bold">{card.title}</h1>
                    <p className="text-gray-500">{card.text}</p>
                  </div>
                </div>
                <div className="back flex h-full items-center justify-center rounded-3xl border p-20">
                  <h1>{card.text}</h1>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default TwoCards;
