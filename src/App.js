import "./styles.css";
import Map from "./components/map/";
import KeyFeatures from "./keyFeatures/";

export default function App() {
  const features = [
    "Help to Buy available, ideal for first time buyers",
    "Within walking distance of the Northern Quarter, Ancoats & NOMA",
    "Exposed brickwork retaining the charm of the existing building",
    "Cycle storage",
    "Victorian Mill conversion",
    "13 unique 1,2 and 3 bed apartments available"
  ];

  return (
    <div className="App">
      <KeyFeatures features={features} />
      <Map />
    </div>
  );
}
