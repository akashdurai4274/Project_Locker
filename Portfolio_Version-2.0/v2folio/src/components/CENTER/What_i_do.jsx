import ActivityBox from "./ActivityBox"

const What_i_do = () => {
  const uiux = "Creating intuitive and engaging user experiences through thoughtful design, wireframing, and prototyping to ensure seamless interaction and visual appeal."
  const web = "Building responsive & dynamic websites using modern technologies and frameworks, ensuring functionality, performance, and cross-browser compatibility.";
  const app = "Developing user-friendly mobile applications with a focus on security, performance,  and seamless user experience for both iOS and Android platforms."
  const pbs = "Tackling complex challenges with analytical thinking, innovative solutions, and efficient algorithms to deliver optimized and effective results."
  return (
    <div className="mt-5">
      <span className="text-3xl font-bold font-rajdhani">What I Do</span>
      <div className="container flex flex-wrap justify-between">
        <ActivityBox id="1" topic="Web Development" data={web} color="green"/>
        <ActivityBox id="2" topic="App Development" data={app} color="red"/>
        <ActivityBox id="3" topic="UI/Ux" data={uiux} color="yellow"/>
        <ActivityBox id="4" topic="Problem Soving" data={pbs} color="violet"/>
      </div>
    </div>
  );
}

export default What_i_do


/* Sure, here are 20-word descriptions for each section:

### UI/UX Design
"Creating intuitive and engaging user experiences through thoughtful design, wireframing, and prototyping to ensure seamless interaction and visual appeal."

### Web Development
"Building responsive and dynamic websites using modern technologies and frameworks, ensuring functionality, performance, and cross-browser compatibility."

### App Development
"Developing user-friendly mobile applications with a focus on performance, security, and seamless user experience for both iOS and Android platforms."

### Problem Solving
"Tackling complex challenges with analytical thinking, innovative solutions, and efficient algorithms to deliver optimized and effective results." */