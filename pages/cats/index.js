import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";

export default function Index() {
  const [cats, setCats] = useState([]);
  const fetchCats = async () => {
    const response = await fetch("/api/cats");
    const data = await response.json();
    console.log(data);
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Nav />

      {cats.map((cat, i) => (
        <Card
          key={i}
          name={cat.name}
          id={cat.id}
          phone={cat.phone}
          email={cat.email}
          image={cat.image}
        />
      ))}
    </div>
  );
}
