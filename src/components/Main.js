import Header from "./Header";
import GoalsList from "./GoalsList";
import Recommendations from "./Recommendations";
import Improvements from "./Improvements";

function Main() {
  return (
    <div>
      <Header />
      <div>
        <GoalsList />
        <Recommendations />
        <Improvements />
      </div>
    </div>
  );
}

export default Main;
