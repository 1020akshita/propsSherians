import React from "react";

const Props = ({ values, handleFriends, Index }) => {
  const { name, profession, image, friends } = values;
  return (
    <>
      <div className="w-52 bg-white rounded-md overflow-hidden">
        <div className="w-full h-48 bg-sky-200">
          <img className="w-full h-full  object-cover" src={image} alt="" />
        </div>
        <div className="w-full p-3">
          <h3 className="font-bold text-xl">{name}</h3>
          <h3 className="text-xs mb-3 font-semibold">{profession}</h3>
          <button
            onClick={() => handleFriends(Index)}
            className={`rounded-md ${
              friends ? "bg-blue-500" : "bg-green-500"
            } px-3 py-1 text-white text-xs font-semibold`}
          >
            {friends ? "Friends" : "Add Friends"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Props;
