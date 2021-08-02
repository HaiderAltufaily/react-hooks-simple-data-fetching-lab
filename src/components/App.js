import react, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setImage(data.message);
      });
  }, []);
  if (loading) return <p>Loading...</p>;

  return <img src={image} alt="A Random Dog"></img>;
}
export default App;
