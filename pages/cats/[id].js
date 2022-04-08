import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import Card from "../../components/Card/Card";
import DefaultLayout from "../../layouts/Default";

export default function Cat() {
  const [cat, setCat] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const fetchCat = useCallback(async () => {
    try {
      const response = await fetch(`/api/cats/${id}`);
      const data = await response.json();
      setCat(data);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchCat();
  }, [fetchCat]);

  return (
    <div>
      <DefaultLayout>
        {cat && (
          <Card
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            image={cat.image}
            id={cat.id}
          />
        )}
      </DefaultLayout>
    </div>
  );
}
