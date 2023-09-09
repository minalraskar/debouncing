import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
const pinAPI = "https://api.postalpincode.in/pincode/";
export default function App() {
  const [pin, setPin] = useState("");
  const debouncing = useEffect(() => {
    setTimeout(() => {
      axios
        .get(pinAPI + pin)
        .then((res) => {
          console.log(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [pin]);
  return (
    <div className="App">
      <input onChange={(event) => setPin(event.target.value)} />
    </div>
  );
}
