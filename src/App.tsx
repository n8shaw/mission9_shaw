import React from "react";
import "./App.css";
import CollegeBasketBallTeams from "./CollegeBasketballTeams.json";

interface BBallTeams {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return <h1>Welcome To The Madness</h1>;
}

class Teams extends React.Component<BBallTeams> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {CollegeBasketBallTeams.teams.map((team: BBallTeams) => (
        <Teams key={team.tid} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <>
        <Welcome />
        <TeamList />
      </>
    </div>
  );
}

export default App;
