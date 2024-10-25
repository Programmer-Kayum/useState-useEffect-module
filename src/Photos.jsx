import { useEffect } from "react";
import { useState } from "react";
import ShowPhoto from "./ShowPhoto";

export default function Photos() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <p> Albums: {photos.length}</p>
      {photos.map((photo) => (
        <ShowPhoto photo={photo}></ShowPhoto>
      ))}
    </div>
  );
}
