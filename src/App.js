import "./App.css";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";
import Hero from "./components/Hero/Hero";

function App() {
  const blog = TravelData.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        placeHeading={item.placeHeading}
        img={item.placeImg1}
        img2={item.placeImg2}
        img3={item.placeImg3}
        placeDescription={item.placeDescription}
      />
    );
  });

  return (
    <div className="container">
      <Hero />
      {blog}
    </div>
  );
}

export default App;
