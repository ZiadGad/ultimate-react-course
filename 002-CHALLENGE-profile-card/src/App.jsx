import "./index.css";

const skills = [
  {
    skill: "HTML + CSS",
    color: "#98ACBB",
    level: "Beginner",
  },
  {
    skill: "JavaScript",
    color: "#996700",
    level: "Intermediate",
  },
  {
    skill: "Node.JS",
    color: "#009900",
    level: "Advanced",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
      alt="avatar"
    />
  );
}
function Intro() {
  return (
    <div>
      <h1>Ziad Gad</h1>
      <p>Full stack web developer. My favorite sport is MMA.</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill color={skill.color} name={skill.skill} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ color, name, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "Beginner" && "👶🏻"}
        {level === "Intermediate" && "👍🏻"}
        {level === "Advanced" && "💪🏻"}
      </span>
    </div>
  );
}

export default App;
