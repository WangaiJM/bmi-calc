import Logo from "../../images/logo.svg";
import Calculator from "../Calculator/Calculator";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="header">
      <header className="header-main">
        <img src={Logo} alt="BMI Company Logo " />
      </header>
      <section className="hero">
        <div className="hero-info">
          <h1 className="text-preset-2">
            Body Mass <span></span> Index Calculator
          </h1>
          <p className="text-preset-6">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="hero-calc">
          <Calculator />
        </div>
      </section>
    </section>
  );
};
export default Hero;
