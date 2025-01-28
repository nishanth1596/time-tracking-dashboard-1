import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import TopCard from "./TopCard";

const Container = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState("Weekly");
  const [itemTimeFrame, setItemTimeFrame] = useState({
    current: "weekly",
    previous: "weekly",
  });

  const url = "https://json-server-vercel-pi-eight.vercel.app/items";

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
        } else {
          const items = await res.json();
          setItems(items);
        }
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [error]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p className="text-primary-Light-red-study">Error: {error}</p>;
  return (
    <>
      
      <section className="bg-neutral-Very-dark-blue w-full  grid place-content-center min-h-screen font-rubik">
        <article className="grid  gap-8 p-8 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 max-w-5xl">
          <TopCard
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            itemTimeFrame={itemTimeFrame}
            setItemTimeFrame={setItemTimeFrame}
            items={items}
          />
          <Card items={items} itemTimeFrame={itemTimeFrame} activeButton={activeButton}/>
        </article>
      </section>
    </>
  );
};

export default Container;
