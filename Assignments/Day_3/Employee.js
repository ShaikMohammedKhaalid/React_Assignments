import { useState } from "react";



function EmployeeData() {

    const [emplArray, setEmplArray] = useState([]);

    const [emplno, setNo] = useState("");
    const [emplname, setName] = useState("");
    const [empljob, setJob] = useState("");
    const [emplsal, setSal] = useState("");
    const [empldeptno, setDeptno] = useState("");



    function getEmplClick() {
        let data = [
            { emplno: 10, emplname: "Kiran", empljob: "DcAnalyst" , emplsal:1234,empldeptno:1},
            { emplno: 20, emplname: "Tarun", empljob: "SrConsultant" ,emplsal:45000,empldeptno:2},
            { emplno: 30, emplname: "Rohit", empljob: "Sr.Manager" ,emplsal:1000,empldeptno:3},
            { emplno: 40, emplname: "Charan", empljob: "Manager" ,emplsal:20000,empldeptno:4},
        ];

        setEmplArray(data);

    }

    function addEmplClick()
    {
        let deptObj = { };
        deptObj.emplno = emplno; 
        deptObj.emplname = emplname; 
        deptObj.empljob = empljob; 
        deptObj.emplsalc = emplsal; 
        deptObj.empldeptno = empldeptno; 
        

        let tempArray = [...emplArray];
        tempArray.push(deptObj);       
        setEmplArray( tempArray );

       clearFields();

    }

    function  clearFields()
    {
        setNo("");
        setName("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function  deleteClick(dno)
    {

        

        let tempArray = [...emplArray];
        
        let  index = tempArray.findIndex( item => item.emplno == dno );
        tempArray.splice(index, 1); 

        setEmplArray( tempArray );
    }
    

    function  selectClick(dno)
    {
      let deptObj =   emplArray.find(item =>  item.emplno ==  dno);
      setNo(deptObj.emplno);
      setName(deptObj.emplname);
      setJob(deptObj.empljob);
      setSal(deptObj.emplsal);
      setDeptno(deptObj.empldeptno);
   
    }


    function  updateEmplClick()
    {
        let tempArray = [...emplArray];

        let index = tempArray.findIndex(item => item.emplno == emplno);
        tempArray[index].emplname = emplname ;
        tempArray[index].empljob = empljob ;
        tempArray[index].emplsal = emplsal ;
        tempArray[index].empldeptno = empldeptno;


        setEmplArray( tempArray );

        clearFields();
    }

    let resultArray = emplArray.map(item => {
        return <tr>
            <td>{item.emplno}</td>
            <td>{item.emplname}</td>
            <td>{item.empljob}</td>
            <td>{item.emplsal}</td>
            <td>{item.empldeptno}</td>
            <td align="center">
                <a><img width="20px"  onClick={() => {selectClick(item.emplno)}} src="./New folder/se.png"></img></a>|
                <a><img width="20px"  onClick={() => {deleteClick(item.emplno)}} src="./New folder/de.png"></img></a>
            </td>
        </tr>;
    });

    return (
        <>
            <h3>Perform CRUD Operations on Array of Objects</h3>
            <hr />

            <input placeholder="Emplno" type="text"
                value={emplno} onChange={(e) => setNo(e.target.value)} />

            <input placeholder="Emplname" type="text"
                value={emplname} onChange={(e) => setName(e.target.value)} />

            <input placeholder="EmplJob" type="text"
                value={empljob} onChange={(e) => setJob(e.target.value)} />
            
            <input placeholder="EmplSal" type="text"
                value={emplsal} onChange={(e) => setSal(e.target.value)} />

            <input placeholder="EmplDeptNo" type="text"
                value={empldeptno} onChange={(e) => setDeptno(e.target.value)} />     


            <hr />

            <input type="button" value="Get Depts" onClick={getEmplClick} />
            <input type="button" value="Add Dept" onClick={addEmplClick} />
            <input type="button" value="Update Dept" onClick={updateEmplClick} />

            <hr />
            <table border="2" width="500">
                <tr>
                    <th>Empl Number</th>
                    <th>Empl Name</th>
                    <th>Empl Job</th>
                    <th>Empl Sal</th>
                    <th>Empl DeptNo</th>
                    <th></th>
                </tr>

                {resultArray}
            </table>
        </>
    );
}

export default EmployeeData;