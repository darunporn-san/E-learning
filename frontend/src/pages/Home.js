import Banner from "../components/home/banner";
import CouresRecommend from "../components/home/courseRecommend";
import ReasonChoose from "../components/home/reasonChoose";
import Testmonials from "../components/home/Testmonials";

function Home() {
  return (
    <div>
      <Banner />
      <ReasonChoose/>
      <CouresRecommend/>
      <Testmonials/>
    </div>
  );
}

export default Home;
