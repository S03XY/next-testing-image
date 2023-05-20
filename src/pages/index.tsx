import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div>Next Gif testing</div>
      <Image
        src={
          "https://u7vflccox4455mqk3oekgmc75auy7xmnzycn4rmqc7hbmq7oenza.arweave.net/p-pViE6_Od6yCtuIozBf6CmP3Y3OBN5FkBfOFkPuI3I"
        }
        alt=""
        height={300}
        width={300}
      />
    </div>
  );
};

export default HomePage;
