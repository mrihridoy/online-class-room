import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './component/Navber/Navber';
import Database from './Database/data.json';
import Course from './component/Course/Course';
import Cart from '../src/component/Cart/Cart';



function App() {
  const [courses, setCourses,] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
  setCourses(Database)
  }, [])

  const handleEnrollButton = (course) => {
    console.log("Course Added", course);
    const newCart = [...cart, course];
    setCart(newCart);


  }
  return (
    <div className="App">
        <Navber></Navber>
        <div className="section-container">
          <div className="course-container">
          <ul>
            {
              courses.map(course => 
                <Course course={course}
                handleEnrollButton = {handleEnrollButton}
                ></Course>)
            }
          </ul>
          </div>
          <div className="course-summary">
          <Cart cart={cart}></Cart>
          </div>
        </div>
    </div>
  );
}

export default App;
