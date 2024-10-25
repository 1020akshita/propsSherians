import React, { useState } from 'react'
import Props from './components/Props'

const App = () => {
  const data = [
    {
      name: "Rahul",
      profession: "Artist",
      image:
        "https://img.freepik.com/free-photo/high-view-shot-smiley-man-wearing-cap_23-2148283857.jpg?ga=GA1.1.1555283371.1726491413&semt=ais_hybrid",
      friends: false,
    },
    {
      name: "Jhon",
      profession: "Painter",
      image:
        "https://img.freepik.com/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg?ga=GA1.1.1555283371.1726491413&semt=ais_hybrid",
      friends: false,
    },
    {
      name: "Kunal",
      profession: "Coder",
      image:
        "https://img.freepik.com/free-photo/serious-young-man-with-headphones_23-2147747799.jpg?ga=GA1.1.1555283371.1726491413&semt=ais_hybrid",
      friends: false,
    },
    {
      name: "Laila",
      profession: "Dancer",
      image:
        "https://img.freepik.com/free-photo/fashionable-young-woman-standing-front-blue-backdrop_23-2148204718.jpg?ga=GA1.1.1555283371.1726491413&semt=ais_hybrid",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  const handleFriends = (Index) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === Index) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };
  return (
    
     <>
      <div className="h-screen w-full bg-zinc-200 flex items-center justify-center gap-5">
        {realData.map((elem, index) => (
          <Props
            key={index}
            values={elem}
            handleFriends={handleFriends}
            Index={index}
          />
        ))}
      </div>
    </>
   
   
  )
}

export default App
