import { Header } from "../../components/Header";
import { HomeCointainer, HomeWrapper } from "./styles";
import { RightBar } from "./components/RightBar";
import { MainContent } from "./components/MainContent";

export const Home = () => {
  return (
    <HomeCointainer>
      <Header name="'Nome e sobrenome'" />
      <HomeWrapper className="row mt-4 p-0 w-100 d-flex justify-content-center">
        <div className="col-12 col-md-8 p-0">
          <MainContent />
        </div>
        <div className="col-12 col-md-4 p-0">
          <RightBar />
        </div>
      </HomeWrapper>
    </HomeCointainer>
  );
};
