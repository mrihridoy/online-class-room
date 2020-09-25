import React from 'react';
import './Course.css'

const Course = (props) => {
    const course = props.course
    console.log(props)
    return (
        <div className="d-flex justify-content-left">
            <div className="list-container">
            <img src={course.img} alt=""/>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>Instructor: <b>{course.instructor}</b></p>
            <div className="list-footer">
                <h5>Price: <b>${course.price}</b></h5>
                <button onClick={() => props.handleEnrollButton(props.course)} class="ml-auto btn btn-primary">Enroll Now</button>
            </div>
            </div>
           

        </div>
    );
};

export default Course;