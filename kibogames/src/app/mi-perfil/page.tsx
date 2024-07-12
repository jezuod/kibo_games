"use client"
import MyRankings from "./MyRankings"
import MyFriends from "./MyFriends";
import MyGames from "./MyGames";
import MyData from "./MyData";
import MyLogros from "./MyLogros";
const MiPerfil = () => {
  return (
    <>
      <MyData />
      <MyLogros/>
      <MyGames />
      <MyRankings />
      <MyFriends />
    </>
  );
};

export default MiPerfil;
