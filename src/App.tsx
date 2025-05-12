import { useState, useEffect } from "react";
import sdk from "@farcaster/frame-sdk";
import { Context } from "@farcaster/frame-sdk";
import DayPicker from "./components/DayPicker";
import Day1 from "./components/days/1";
import Day2 from "./components/days/2";
import Day3 from "./components/days/3";
import Day4 from "./components/days/4";
import Day5 from "./components/days/5";
import Day6 from "./components/days/6";
import Day7 from "./components/days/7";
// Remove the import of Buttons as we're now including them in the BlogPost component

function App() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<Context.FrameContext>();
  const [chosenDay, setChosenDay] = useState<number>(1);

  console.log("the context is", context);

  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return <div className="bg-[#2D082D] text-[#FFD4E5]">Loading...</div>;
  }

  const renderDayContent = () => {
    // Pass chosenDay and setChosenDay to each day component
    switch (chosenDay) {
      case 1:
        return <Day1 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      case 2:
        return <Day2 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      case 3:
        return <Day3 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      case 4:
        return <Day4 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      case 5:
        return <Day5 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      case 6:
        return <Day6 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      case 7:
        return <Day7 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
      default:
        return <Day1 chosenDay={chosenDay} setChosenDay={setChosenDay} />;
    }
  };

  return (
    <main className="flex flex-col min-h-screen w-full items-center gap-2 bg-white text-black p-2">
      <DayPicker chosenDay={chosenDay} setChosenDay={setChosenDay} />
      {renderDayContent()}
    </main>
  );
}

export default App;
