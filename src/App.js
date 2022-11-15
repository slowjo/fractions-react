import { useState, useEffect } from 'react';
import ChartContainer from "./components/charts/ChartContainer";
import SolutionInput from './components/Input/SolutionInput';
import { createNewFraction, buildColorArray, buildFractionArray } from './func/buildArrayAndColors';

function App() {
  const [solutionArray, setSolutionArray] = useState(null);
  const [currentFraction, setCurrentFraction] = useState(null);
  const [currentFractionArray, setCurrentFractionArray] = useState(null);
  const [currentColorArray, setCurrentColorArray] = useState(null);

  const [displayedMessage, setDisplayedMessage] = useState('Schreibe das Tortendiagramm als Bruch!')

  const makeNewFraction = () => {
    const { solution, arrayForPie } = createNewFraction();
    const newFractionArray = buildFractionArray(arrayForPie);
    const newColorArray = buildColorArray(arrayForPie);

    setSolutionArray(solution);
    setCurrentFraction(arrayForPie);
    setCurrentFractionArray(newFractionArray);
    setCurrentColorArray(newColorArray);
  };

  useEffect(() => {
    makeNewFraction();
  }, []);


  return (
    <div className="App">
      <div>
        <ChartContainer currentFraction={currentFraction} fractionArray={currentFractionArray} colorArray={currentColorArray} />
        <SolutionInput solutionArray={solutionArray} makeNewFraction={makeNewFraction} displayedMessage={displayedMessage} setDisplayedMessage={setDisplayedMessage} />
      </div>
    </div>
  );
}

export default App;
