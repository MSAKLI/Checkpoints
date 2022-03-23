import "./App.css";
import image from "./imageInSrc.png";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">GOMYCODE</h1>
        <br />
        <img src={image} style={{ height: "320px", Width: "240px" }} />
        <br />
        <img
          src="/imageInPublic.jpg"
          style={{ height: "320px", Width: "240px" }}
        />
      </div>
      <video width={320} height={240} controls="">
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
