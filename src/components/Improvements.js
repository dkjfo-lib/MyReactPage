import Improvement from "./Improvement";

const Improvements = function () {
  return (
    <div className="Improvements">
      <h2>Things I am able to improve in my life</h2>
      <Improvement
        {...{
          improvement: "I am willing to control my desire for games",
          cure: "Spend more time outside",
        }}
      />
      <Improvement
        {...{
          improvement: "I am willing to do things more cautiously",
          cure: "Spend more time planning use cases of skills you are learning",
        }}
      />
      <Improvement
        {...{
          improvement: "I am willing to fix my teeth",
          cure: "Go to the dentist",
        }}
      />
      <Improvement
        {...{
          improvement: "I am willing to improve my body",
          cure: "Eat more. Do weight training. Ride a bike.",
        }}
      />
      <Improvement
        {...{
          improvement: "I am willing to learn about man and god",
          cure: "Read old books about nature of man and world.",
        }}
      />
    </div>
  );
};

export default Improvements;
