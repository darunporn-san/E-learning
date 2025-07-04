import Banner from "../components/home/banner";
import CouresRecommend from "../components/home/courseRecommend";
import ReasonChoose from "../components/home/reasonChoose";
import Testmonials from "../components/home/Testmonials";
import Header from "../layout/header";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ReasonChoose/>
      <CouresRecommend/>
      <Testmonials/>
    </div>
  );
}

export default Home;
