import Header from "./Header";
import GoalsList from "./Goals/GoalsList";
import Recommendations from "./Recommendations";
import Improvements from "./Improvements/Improvements";
import Mantras from "./Mantras";
import MusicList from "./Music/MusicList";

function Main() {
  return (
    <div>
      <Header />
      <div>
        <GoalsList />
        <Recommendations />
        <Improvements />
        <MusicList/>
        <Mantras />
      </div>
    </div>
  );
}

export default Main;
