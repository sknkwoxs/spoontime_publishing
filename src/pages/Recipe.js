import Footer from "../components/Footer";
import { BabyInfo } from "./Recipe/BabyInfo";
import { List } from "./Recipe/List";
import { Navigation } from "./Recipe/Navigation";

export default function Recipe() {
  return (
    <>
      <div className="w-full min-h-full pb-[76px]">
        <div className="pb-4 px-4">
          <Navigation />
          <BabyInfo />
          <List />
        </div>
        <Footer />
      </div>
    </>
  );
}
