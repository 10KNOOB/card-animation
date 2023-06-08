import { useState } from "react";
import { motion } from "framer-motion";
import { cardData } from "../Data";

const WidthCard = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleCardClick = (cardId) => {
    if (flippedCards.includes(cardId)) {
      setFlippedCards(flippedCards.filter((id) => id !== cardId));
    } else {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  const fadeUpScroll = {
    offscreen: {
      y: 60,
      opacity: 1,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
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
        variants={fadeUpScroll}
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

export default WidthCard;
