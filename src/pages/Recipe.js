import Footer from "../components/Footer";
import { BabyInfo } from "./Recipe/BabyInfo";
import { List } from "./Recipe/List";
import { Navigation } from "./Recipe/Navigation";

export default function Recipe() {
  return (
    <>
      <div className="w-full h-full">
        <div className="px-4 pt-8">
          <Navigation />
          <BabyInfo />
          <List />
        </div>
        <Footer />
      </div>
    </>
  );
}
