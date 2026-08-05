import Gender from "../../images/icon-gender.svg";
import Age from "../../images/icon-age.svg";
import Muscle from "../../images/icon-muscle.svg";
import Pregnancy from "../../images/icon-pregnancy.svg";
import Race from "../../images/icon-race.svg";

import "./limitations.scss";

const Limitations = () => {
  return (
    <section className="limits">
      <div className="limits-head">
        <h2 className="text-preset-3">Limitations of BMI</h2>
        <p className="text-preset-6">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="limits-body">
        <div className="limits-card">
          <div className="limits-card__head">
            <img src={Gender} alt="" />
            <h4 className="text-preset-5">Gender</h4>
          </div>
          <div className="limits-card__body">
            <p className="text-preset-6">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
        </div>
        <div className="limits-card">
          <div className="limits-card__head">
            <img src={Age} alt="" />
            <h4 className="text-preset-5">Age</h4>
          </div>
          <div className="limits-card__body">
            <p className="text-preset-6">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
        </div>
        <div className="limits-card">
          <div className="limits-card__head">
            <img src={Muscle} alt="" />
            <h4 className="text-preset-5">Muscle</h4>
          </div>
          <div className="limits-card__body">
            <p className="text-preset-6">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </div>
        <div className="limits-card">
          <div className="limits-card__head">
            <img src={Pregnancy} alt="" />
            <h4 className="text-preset-5">Pregnancy</h4>
          </div>
          <div className="limits-card__body">
            <p className="text-preset-6">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
        </div>
        <div className="limits-card">
          <div className="limits-card__head">
            <img src={Race} alt="" />
            <h4 className="text-preset-5">Race</h4>
          </div>
          <div className="limits-card__body">
            <p className="text-preset-6">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Limitations;
