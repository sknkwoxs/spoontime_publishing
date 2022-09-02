import TabBar from "../components/TabBar";
import Alert from "./Recipe/Alert";
import PopUp from "./Recipe/PopUp";
import { BabyInfo } from "./Recipe/Main/BabyInfo";
import { List } from "./Recipe/Main/List";
import { Navigation } from "./Recipe/Main/Navigation";

export default function Recipe() {
  return (
    <>
      <div className="w-full min-h-full pb-[76px]">
        <div className="px-4 pb-4">
          <Navigation />
          <BabyInfo />
          <List />
        </div>
        <TabBar />
      </div>
      {/* <Alert /> */}
      {/* <PopUp /> */}
    </>
  );
}
