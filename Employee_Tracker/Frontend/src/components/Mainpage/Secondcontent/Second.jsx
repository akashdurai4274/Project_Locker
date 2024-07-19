import Avatarstack from "./Avatarstack";
import BoxStack from "./BoxStack";
const Second = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center">
        <span className="text-4xl font-bold tracking-widest">Software </span>
        <span className="text-4xl font-bold tracking-widest">Developers</span>
      </div>
      <Avatarstack />
      <div  className="space-y-3">
        <BoxStack
          color={1}
          icon={"active.svg"}
          text1={"Active Projects"}
          text2={"16"}
        />
        <BoxStack
          color={2}
          icon={"upcoming.svg"}
          text1={"Upcoming Projects"}
          text2={"19"}
        />
      </div>
    </div>
  );
};

export default Second;
