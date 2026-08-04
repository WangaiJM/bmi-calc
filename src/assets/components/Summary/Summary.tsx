import Person from "../../images/image-man-eating.webp";
import "./summary.scss";

const Summary = () => {
  return (
    <section className="summary">
      <div className="summary-illustration">
        <img src={Person} alt="" />
      </div>
      <div className="summary-content">
        <h2 className="text-preset-3">What your BMI result means</h2>
        <p className="text-preset-6">
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};
export default Summary;
