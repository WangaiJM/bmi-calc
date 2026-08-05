import { useEffect, useState } from "react";

import "./calculator.scss";

const Calculator = () => {
  type Form = "metric" | "imperial";
  const [unit, setUnit] = useState<Form>("metric");

  const [feet, setFeet] = useState<number | null>(null);
  const [inches, setInches] = useState<number | null>(null);
  const [stone, setStone] = useState<number | null>(null);
  const [pound, setPound] = useState<number | null>(null);

  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string | null>(null);

  useEffect(() => {
    if (feet == null || inches == null) {
      setHeight(null);
      return;
    }

    const heightInMtrs = feet * 0.3048 + inches * 0.0254;
    setHeight(heightInMtrs * 100);
  }, [feet, inches]);

  useEffect(() => {
    if (stone == null || pound == null) {
      setWeight(null);
      return;
    }

    const weightInKgs = stone * 6.35029 + pound * 0.453592;

    setWeight(weightInKgs);
  }, [stone, pound]);

  useEffect(() => {
    if (weight == null || height == null) {
      setBmi(null);
      return;
    }

    const heightInMtrs = height / 100;
    setBmi(weight / heightInMtrs ** 2);
  }, [height, weight]);

  const minWeight =
    height !== null ? (18.5 * (height / 100) ** 2).toFixed(1) : null;
  const maxWeight =
    height !== null ? (24.9 * (height / 100) ** 2).toFixed(1) : null;

  const toStLbs = (kg: number) => {
    if (kg == null) return null;

    const totalLbs = kg * 2.20462;
    const stones = Math.floor(totalLbs / 14);
    const pounds = Math.round(totalLbs % 14);

    return { stones, pounds };
  };

  const min = toStLbs(Number(minWeight));
  const max = toStLbs(Number(maxWeight));

  useEffect(() => {
    if (bmi === null) {
      setBmiCategory(null);
      return;
    }

    if (bmi < 18.5) {
      setBmiCategory("underweight");
    } else if (bmi < 25) {
      setBmiCategory("healthy weight");
    } else if (bmi < 30) {
      setBmiCategory("overweight");
    } else {
      setBmiCategory("obese");
    }
  }, [bmi]);

  const handleUnitChange = (value: Form) => {
    setUnit(value);

    setHeight(null);
    setWeight(null);
    setBmi(null);

    setFeet(null);
    setInches(null);
    setStone(null);
    setPound(null);
  };

  return (
    <section className="calc" aria-label="calculator">
      <h2 className="text-preset-4">Enter your details below</h2>
      <div className="calc-choice">
        <div className="radio-group">
          <input
            type="radio"
            name="unit"
            value="metric"
            id="metric"
            checked={unit === "metric"}
            onChange={() => handleUnitChange("metric")}
          />
          <label htmlFor="metric" className="text-preset-6">
            Metric
          </label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            name="unit"
            value="imperial"
            id="imperial"
            checked={unit === "imperial"}
            onChange={() => handleUnitChange("imperial")}
          />
          <label htmlFor="imperial" className="text-preset-6">
            Imperial
          </label>
        </div>
      </div>

      {unit === "metric" && (
        <div className="calc-metric">
          <div className="calc-group">
            <label htmlFor="metric-height" className="text-preset-7">
              Height
            </label>
            <div className="input-wrapper text-preset-4">
              <input
                type="number"
                min={1}
                id="metric-height"
                required
                value={height ?? ""}
                name="metric-height"
                onChange={(e) =>
                  setHeight(e.target.value ? Number(e.target.value) : null)
                }
                className="text-preset-4"
                placeholder="0"
              />
            </div>
          </div>
          <div className="calc-group">
            <label htmlFor="metric-weight" className="text-preset-7">
              Weight
            </label>
            <div className="input-wrapper text-preset-4">
              <input
                type="number"
                id="metric-weight"
                min={1}
                name="metric-weight"
                value={weight ?? ""}
                onChange={(e) =>
                  setWeight(e.target.value ? Number(e.target.value) : null)
                }
                className="text-preset-4"
                placeholder="0"
              />
            </div>
          </div>
        </div>
      )}

      {unit === "imperial" && (
        <div className="calc-imperial">
          <div className="calc-group">
            <label className="text-preset-7">Height</label>
            <div className="calc-group-inputs">
              <div className="input-wrapper text-preset-4">
                <input
                  type="number"
                  id="metric-height__feet"
                  name="metric-height"
                  value={feet ?? ""}
                  min={1}
                  onChange={(e) =>
                    setFeet(e.target.value ? Number(e.target.value) : null)
                  }
                  placeholder="0"
                  className="text-preset-4"
                />
              </div>
              <div className="input-wrapper text-preset-4">
                <input
                  type="number"
                  id="metric-height__inches"
                  name="metric-height"
                  value={inches ?? ""}
                  min={1}
                  onChange={(e) =>
                    setInches(e.target.value ? Number(e.target.value) : null)
                  }
                  placeholder="0"
                  className="text-preset-4"
                />
              </div>
            </div>
          </div>
          <div className="calc-group">
            <label className="text-preset-7">Weight</label>
            <div className="calc-group-inputs">
              <div className="input-wrapper text-preset-4">
                <input
                  type="number"
                  id="metric-weight__stone"
                  name="metric-weight"
                  value={stone ?? ""}
                  min={1}
                  onChange={(e) =>
                    setStone(e.target.value ? Number(e.target.value) : null)
                  }
                  placeholder="0"
                  className="text-preset-4"
                />
              </div>
              <div className="input-wrapper text-preset-4">
                <input
                  type="number"
                  id="metric-weight__pound"
                  name="metric-weight"
                  value={pound ?? ""}
                  min={1}
                  onChange={(e) =>
                    setPound(e.target.value ? Number(e.target.value) : null)
                  }
                  placeholder="0"
                  className="text-preset-4"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {bmi == null && (
        <div className="results results-input">
          <h3 className="text-preset-4">Welcome</h3>
          <p className="text-preset-7">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      )}
      {bmi !== null && maxWeight && minWeight && (
        <div className="results results-output">
          <div className="results-outcome">
            <p className="text-preset-6">Your results is</p>
            <h3 className="text-preset-2">{bmi.toFixed(1)}</h3>
          </div>
          <div className="results-explanation">
            <p className="text-preset-7">
              Your BMI suggests you’re{" "}
              <span className="text-preset-5">{bmiCategory}</span>. Your ideal
              weight is between{" "}
              {unit == "metric" && (
                <>
                  <span className="text-preset-6">{minWeight} Kgs</span> -{" "}
                  <span className="text-preset-6"> {maxWeight} Kgs</span>
                </>
              )}
              {unit == "imperial" && (
                <>
                  <span className="text-preset-6">{min?.stones} St</span>{" "}
                  <span className="text-preset-6">{min?.pounds} Lbs</span> and{" "}
                  <span className="text-preset-6">{max?.stones} St</span>{" "}
                  <span className="text-preset-6">{max?.pounds} Lbs</span>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
export default Calculator;
