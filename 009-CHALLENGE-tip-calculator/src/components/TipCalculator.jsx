import { useState } from "react";
import BillInput from "./BillInput";
import Message from "./Message";
import PercentageInput from "./PercentageInput";
import ResetButton from "./ResetButton";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [perc, setPerc] = useState(0);
  const [perc2, setPerc2] = useState(0);
  const tip = bill * ((perc + perc2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPerc(0);
    setPerc2(0);
  }

  return (
    <>
      <BillInput bill={bill} setBill={setBill} />
      <PercentageInput perc={perc} setPerc={setPerc}>
        How did you like the service?
      </PercentageInput>
      <PercentageInput perc={perc2} setPerc={setPerc2}>
        How did your friend like the service?
      </PercentageInput>
      {bill > 0 && (
        <>
          <Message total={bill + tip} bill={bill} tip={tip} />
          <ResetButton onReset={handleReset}>Reset</ResetButton>
        </>
      )}
    </>
  );
}
