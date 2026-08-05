# BMI Calculator

This project is a solution to a challenge from Frontend Mentor, built using **React** and **TypeScript** as part of my learning journey.

## Overview

The application calculates Body Mass Index (BMI) based on user input and provides a classification along with an ideal weight range. The UI is styled using **Sass**.

## Implementation Notes

- Initially, I planned to map BMI ranges using a JSON configuration.
  However, given the small and static dataset, I opted for a simpler `if...else` approach for classification logic.

## Key Learnings

- **Grid Layout (Advanced Positioning)**
  The most challenging aspect was implementing the **staggered desktop layout** for the cards. This required a deeper understanding of grid column placement and alignment strategies.

- **Custom Input Styling**
  Learned how to remove default spinners from `input[type="number"]` for a cleaner design.

- **Responsive Typography**
  Explored the use of `clamp()` for scalable font sizes. While functional, I am still refining an optimal system for generating consistent clamp values.

## Improvements / Challenges

- Find a **systematic approach to `clamp()`**.
  I am not certain if there is a formula to come up with `clamp()` sizes. If one has such formula, assist.

## Conclusion

This was a good project.
