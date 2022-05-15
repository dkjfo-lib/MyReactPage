export default function Goal(props) {
  const buttonText = props.didIt ? "Great job man!" : "did you do this today?";

  return (
    <div className="Goal">
      <div>
        <p>{props.activity}</p>
        <button onClick={() => props.onGoalAchieved(props.activity)}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
