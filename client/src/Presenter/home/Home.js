import * as S from "./style";
import Title from "Presenter/home/Title";

const Home = ({
  nickname,
  setNickname,
  roomNum,
  setRoomNum,
  onButtonClick,
}) => {
  return (
    <S.Background>
      <Title />
      <S.LoginSection>
        <S.Input
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <S.Input
          placeholder="방 번호"
          value={roomNum}
          onChange={(e) => setRoomNum(e.target.value)}
        />
        <S.Button onClick={onButtonClick}>입장</S.Button>
      </S.LoginSection>
    </S.Background>
  );
};

export default Home;
