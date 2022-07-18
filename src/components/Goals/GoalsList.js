import React from "react";
import Goal from "./Goal";

export default function GoalsList() {
  const [goals, SetGoals] = React.useState({
    goals: [
      { activity: "Hand stand 💪", didIt: true },
      { activity: "Italian 👌 🇮🇹", didIt: false },
      { activity: "Serbian 🇷🇸", didIt: false },
    ],
  });

  function onGoalAchieve(activity) {
    var newGoals = goals.goals.map((item) => {
      if (item.activity === activity) item.didIt = !item.didIt;
      return item;
    });
    SetGoals((prevGoals) => {
      return {
        ...prevGoals,
        goals: newGoals,
      };
    });
  }

  const GoalsCards = goals.goals.map((item, index) => (
    <Goal {...{ ...item, onGoalAchieved: onGoalAchieve, key: index }} />
  ));

  return (
    <div className="GoalsList">
      <div className="GoalsList-Header">
        <h2>My current goals</h2>
        <p>[15 may 22]</p>
      </div>
      {GoalsCards}
      <p>
        {goals.goals.every((item) => item.didIt) ? "You are awesome!" : " "}
      </p>
    </div>
  );
}
