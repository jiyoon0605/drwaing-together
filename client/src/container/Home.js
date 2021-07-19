import { HomePresenter } from "Presenter/home";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";

const Home = () => {
  const [nickname, setNickname] = useState();
  const [roomNum, setRoomNum] = useState();
  const _setNickname = useCallback((value) => setNickname(value), []);
  const _setRoomNum = useCallback((value) => setRoomNum(value), []);
  const history = useHistory();

  const onButtonClick = () => {
    history.push(`/room/${roomNum}/${nickname}`);
  };

  const props = {
    nickname,
    setNickname: _setNickname,
    roomNum,
    setRoomNum: _setRoomNum,
    onButtonClick,
  };
  return <HomePresenter {...props} />;
};

export default Home;
