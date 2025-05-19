import BasicAnimation from "./components/basics/BasicAnimation";
import DynamicAnimation from "./components/basics/DynamicAnimation";
import Keyframes from "./components/basics/Keyframes";
import LayoutAnimation from "./components/basics/LayoutAnimation";
import Variants from "./components/basics/Variants";

function App() {
  return (
    <>
      <h1 className="text-center text-6xl text-red-500 py-10">Framer-Motion</h1>
      {/* Basics */}
      {/* <BasicAnimation />
      <Variants /> */}
      <DynamicAnimation />
      <Keyframes />
      <LayoutAnimation />
    </>
  );
}

export default App;
