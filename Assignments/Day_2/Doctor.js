import React from "react"

function Doctor(){
    let doc=[
        {doctorId:1,doctorName:"KL RAHUL",designation:"Openner",experience:24,contactNumber:11111111111},
        {doctorId:7,doctorName:"MS.DHONI",designation:"WicketKeeper",experience:10,contactNumber:7777777777},
        {doctorId:10,doctorName:"SachinTendulkar",designation:"1STDOWN",experience:24,contactNumber:202002020202},
        {doctorId:18,doctorName:"ViratKohli",designation:"2NDDOWN",experience:12,contactNumber:19191981818},
        {doctorId:63,doctorName:"Surya",designation:"Heart Specialist",experience:1,contactNumber:9567833400},
    ];
    let docObj=doc.map(i=>{
      return  <tr>
            <td>{i.doctorId}</td>
            <td>{i.doctorName}</td>
            <td>{i.designation}</td>
            <td>{i.experience}</td>
            <td>{i.contactNumber}</td>
        </tr>
    })

    return(
        <>
            <table border="2" height="100">
                <tr>
                <th>Doctor Id</th>
                <th>Doctor Name</th>
                <th>Designation</th>
                <th>Experience</th>
                <th>Contact Number</th>
                </tr>
                {docObj}
            </table>
        </>
    )
}

export default Doctor;