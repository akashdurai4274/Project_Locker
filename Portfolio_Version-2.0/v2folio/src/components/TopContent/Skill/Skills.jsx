import Animeskill from "./Animeskill";

const Skills = () => {
  const html = ["HTML, CSS, JS","DOM", "Semantic Tags", "Specificity", "Layout Techiques", "Responsive Design", "Animations",]
  const Flutter = [
    "Basics",
    "State Management(BLOC, PROVIDER,)",
    "Networking (HTTP Requests)",
    "Animations",
    "Custom Widgets and Themes",
  ];
  const Node = [
    "Core Modules",
    "Express Framework",
    "Database Integration",
    "RESTful API Design",
    "JWT Authentication",
    "Error Handling"
  ];
  const Go = [
    "Control Structures",
    "Data Structures",
    "Concurrency",
    "Building REST APIs",
  ];
  const Java = [
    "Classes and Objects",
    "Object-Oriented Programming",
    "Collections Framework",
    "Exception Handling",
    "Multithreading and Concurrency",
    "Java Streams & Lambda Expressions"
  ];
  return (
    <div className="max-h-[650px] overflow-auto mt-5">
      <span className="my-6 text-4xl font-extrabold bottom-2 font-rajdhani">
        Skills
      </span>
      <div className="w-16 h-2 my-3 bg-purple-600 rounded-lg"></div>
      <div className="flex flex-wrap justify-between ">
        <Animeskill id="1" title="WEBSTACK" detial={html} color="orange" />
        <Animeskill id="2" title="NODE" detial={Node} color="green" />
        <Animeskill id="3" title="JAVA" detial={Java} color="blue" />
        <Animeskill id="4" title="FLUTTER" detial={Flutter} color="sky" />
        <Animeskill id="5" title="Go" detial={Go} color="skylight" />
      </div>
    </div>
  );
};

export default Skills;
