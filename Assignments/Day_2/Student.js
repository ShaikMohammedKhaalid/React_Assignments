
import bgdownload from './bgdownload.jpg';

import React from "react";

function Student() {
    let stu = { sid: 1, sname: "KL RAHUL", course: "Cricket", age: 22, total:200 }

Image.src="./bgdownolad"

    let stud =
        <>
            <tr>
                <td>ID</td>
                <td>{stu.sid}</td>
            </tr>
            <tr>
                <td>NAME</td>
                <td>{stu.sname}</td>
            </tr> <tr>
                <td>COURSE</td>
                <td>{stu.course}</td>
            </tr><tr>
                <td>AGE</td>
                <td>{stu.age}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>{stu.total}</td>
            </tr>
        </>
        

    return (
        <>
            <table border="2" height="200">
                <tr>

                    <th>Student</th>
                    <th>Data</th>
                </tr>
                {stud}
            </table>

           <img src={bgdownload}/>
        </>)
}
export default Student;