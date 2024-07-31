import { useEffect, useState } from "react";
import { AUTH_KEY } from "../config";

function Fetch() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.tumblr.com/v2/blog/worldofplantes.tumblr.com/posts?api_key=${AUTH_KEY}&limit=30`
    )
      .then((res) => res.json())
      .then((data) => {
        const regex = /https?:\/\/[^\s"']+/g;
        console.info("data", data);

        // Utiliser un tableau pour accumuler toutes les URLs
        const imageUrls = [];

        data.response.posts.forEach((post) => {
          post.trail.forEach((contentItem) => {
            const urls = contentItem.content.match(regex);
            if (urls) {
              imageUrls.push(...urls); // Ajouter toutes les URLs trouvées au tableau
            }
          });
        });

        setCards(imageUrls);
      })
      .catch((error) => console.error("Failed to fetch posts:", error));
  }, []);

  console.info("cards??", cards);
  cards.map((card) => console.info(card));

  return (
    <>
      <h1 className="text-red-700">Flowers cards</h1>
      <div className="">???</div>
      {cards.map((card, index) => (
        <img key={index} src={card} className="h-[480px] w-[345px]" />
      ))}
    </>
  );
}

export default Fetch;
