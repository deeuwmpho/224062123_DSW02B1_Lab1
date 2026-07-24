import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ClassList from "./components/ClassList";
import Footer from "./components/Footer";

function App() {
  const [classes, setClasses] = useState([
    { id: 1, name: "Yoga",          trainer: "Mbali",  slots: 5 },
    { id: 2, name: "Boxing",        trainer: "Mike",   slots: 3 },
    { id: 3, name: "Body Building", trainer: "Arnold", slots: 4 },
    { id: 4, name: "Calisthenics",  trainer: "Mpho",   slots: 2 }
  ]);

  function bookClass(id) {
    let newClasses = [];
    for (let i = 0; i < classes.length; i++) {
      let item = classes[i];
      if (item.id == id) {
        if (item.slots > 0) {
          item = {
            id: item.id,
            name: item.name,
            trainer: item.trainer,
            slots: item.slots - 1
          };
        }
      }
      newClasses.push(item);
    }
    setClasses(newClasses);
  }

  useEffect(function () {
    console.log("Class bookings updated.");
  }, [classes]);

  return (
    <div>
      <Header />
      <ClassList classes={classes} bookClass={bookClass}/>
      <Footer />
    </div>
  );
}

export default App;