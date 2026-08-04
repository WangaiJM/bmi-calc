import Eating from "../../images/icon-eating.svg";
import Exercise from "../../images/icon-exercise.svg";
import Sleeping from "../../images/icon-sleep.svg";

import "./tips.scss";

const Tips = () => {
  return (
    <section className="tips">
      <article className="tip">
        <div className="tip-head">
          <img src={Eating} alt="" />
        </div>
        <div className="tip-body">
          <h3 className="text-preset-4">Healthy eating</h3>
          <p className="text-preset-6">
            Healthy eating promotes weight control, disease prevention, better
            digestion, immunity, mental clarity, and mood.
          </p>
        </div>
      </article>
      <article className="tip">
        <div className="tip-head">
          <img src={Exercise} alt="" />
        </div>
        <div className="tip-body">
          <h3 className="text-preset-4">Regular exercise</h3>
          <p className="text-preset-6">
            Exercise improves fitness, aids weight control, elevates mood, and
            reduces disease risk, fostering wellness and longevity.
          </p>
        </div>
      </article>
      <article className="tip">
        <div className="tip-head">
          <img src={Sleeping} alt="" />
        </div>
        <div className="tip-body">
          <h3 className="text-preset-4">Adequate sleep</h3>
          <p className="text-preset-6">
            Sleep enhances mental clarity, emotional stability, and physical
            wellness, promoting overall restoration and rejuvenation.
          </p>
        </div>
      </article>
    </section>
  );
};
export default Tips;
