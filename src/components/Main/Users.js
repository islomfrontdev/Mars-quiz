import { Box } from "@mui/system";
import React from "react";
import "../../Styles/UserTables/users.css";

export default function Users() {
  const topUsers = [
    {
      coin: 10051,
      name: "Islom Shahobiddinov",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b9/d0/97/b9d097ba-fa05-6acc-28ae-6b323e77f6b0/source/512x512bb.jpg",
      tg: "https://t.me/islomfrontdev",
      age: 23,
      level: 3,
    },
    {
      coin: 20031,
      name: "Fayzihonov Murad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fzWs5XKVYYPxoPb5Zf1lhvJ5KzPe5B8RG-VIoUJbgIc-LEXlTKGFZSeOXZZBgeQ8xIc&usqp=CAU",
      tg: "https://t.me/Fayzikhanov",
      age: 24,
      level: 1,
    },
    {
      coin: 14076,
      name: "Zayniddinov Ibrat",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/cb/85/75/cb857504-4a71-03ae-ea69-99e1afe62df5/source/512x512bb.jpg",
      tg: "https://t.me/zayniddinovibrat",
      age: 24,
      level: 2,
    },
  ];
  const topSevenUsers = [
    {
      coin: 1051,
      name: "Oybek Shahobiddinov",
      img: "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/4e/f8/57/4ef857bf-99d4-7e40-4ac4-8487b2cdf042/source/512x512bb.jpg",
      tg: "https://t.me/islomfrontdev",
      age: 13,
      level: 4,
    },
    {
      coin: 1001,
      name: "Abror Hasanov",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE70w1HoAQhoISqHUoloQVL2mdDv7l8hyAluxRhyP1l2Cdf_5gMhloM34r737ZaaWw7yI&usqp=CAU",
      tg: "https://t.me/islomfrontdev",
      age: 13,
      level: 5,
    },
    {
      coin: 990,
      name: "Abror Karimov",
      img: "https://www.ranklogos.com/wp-content/uploads/2016/09/ABC-For-Kids-Education-App-Logo-Rk006.png",
      tg: "https://t.me/islomfrontdev",
      age: 15,
      level: 6,
    },
    {
      coin: 854,
      name: "Muhammadbobur Sobirov",
      img: "https://store-images.s-microsoft.com/image/apps.42853.13578641491523768.65667998-5ecb-4f40-b45e-9dfd43cf4d2f.4702981c-b0d2-4ed5-a1ba-9909317971fa?mode=scale&q=90&h=200&w=200&background=%23FFFFFF",
      tg: "https://t.me/islomfrontdev",
      age: 13,
      level: 7,
    },
    {
      coin: 789,
      name: "Akmal Fozilov",
      img: "https://lh3.googleusercontent.com/bgxRCW8XKws-GlqYu4qgfm1keQrs9t2AoEAv-TFDexrmrl4Lv-4q7CxQeIxKOw66VA",
      tg: "https://t.me/islomfrontdev",
      age: 12,
      level: 8,
    },
    {
      coin: 673,
      name: "Oybek Shahobiddinov",
      img: "https://i.pinimg.com/originals/68/5b/50/685b509e3759ff589446765ac4223bc8.jpg",
      tg: "https://t.me/islomfrontdev",
      age: 16,
      level: 9,
    },
    {
      coin: 551,
      name: "Shohjahon Fayzullayev",
      img: "https://cdn2.vectorstock.com/i/1000x1000/85/21/cartoon-little-boy-studying-vector-24838521.jpg",
      tg: "https://t.me/islomfrontdev",
      age: 11,
      level: 10,
    },
  ];
  return (
    <div className="topUsersWrapper">
      <div className="topUsersBox">
        {topUsers.map((topUser) => (
          <div className="topUserCard">
            <Box
              sx={{
                backgroundColor: topUser.level == 1 ? "#8953C2" : "#f9f6ff",
                position: "relative",
              }}
              className={
                topUser.level === 2 || topUser.level === 3
                  ? "topUserCardHeader"
                  : "topUserCardHeader topOne"
              }
            >
              <Box
                sx={{
                  backgroundColor:
                    topUser.level == 1
                      ? "#D2B141"
                      : topUser.level == 2
                      ? "#BA8E77"
                      : "#CFCFCF",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              >
                {topUser.level}
              </Box>
              <h4 className="topUserCoin">{topUser.coin}</h4>
              <img className="topUserImg" src={topUser.img} />
            </Box>
            <div className="topUserCardBody">
              <h3 className="topUserName">{topUser.name}</h3>
              <div>
                <a target="_blank" className="topUserLink" href={topUser.tg}>
                  @telegram
                </a>
              </div>
            </div>
            <div className="topUserCardFooter">
              <p className="topUserCardAge">{topUser.age} yosh</p>
              <button className="removeBtn">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="topSevenUsersBox">
        <table className="topUserTable">
          <thead>
            <tr>
              <th>Position</th>
              <th>Student</th>
              <th>Age</th>
              <th>Coins</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {topSevenUsers.map((user) => (
              <tr>
                <td className="place">{user.level}</td>
                <td>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <img className="topUserTableImg" src={user.img} />
                    </div>
                    <div>
                      <p>{user.name}</p>
                      <a className="topUserLink" href={user.tg}>
                        @Telegram
                      </a>
                    </div>
                  </Box>
                </td>
                <td>{user.age}</td>
                <td>{user.coin}</td>
                <td>
                  <button className="removeBtn">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
