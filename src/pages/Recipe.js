import TabBar from "../components/TabBar";
import Alert from "./MealPlan/Alert";
import { BabyInfo } from "./Recipe/BabyInfo";
import { List } from "./Recipe/List";
import { Navigation } from "./Recipe/Navigation";

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
      <Alert />
    </>
  );
}
