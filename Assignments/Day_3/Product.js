import { useState } from "react";

function App() {

    const [pid, setPid] = useState("");
    const [pri, setPri] = useState("");
     const[qty, setQty]= useState("");
    const [result, setResult] = useState("");


    function updatePid(event)
    {        
       setPid(event.target.value);
    }

    function updatePri(event)
    {        
       setPri(event.target.value);
    }
    

    function  ResultClick()
    {
        {
         setResult( pid*pri);
            // setResult("Invalid User Id or Password");
        }
    }

    return (
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
                <legend>Product Details</legend>
                Product  Name  :    <input type="text" onChange={updatePid}  />
                <br /><br />

                Price  :    <input type="text" onChange={updatePri}  />
                <br /><br />

                <input type="button" onClick={ResultClick} value="Result" />
                Total Result is: 
               <p>{result}</p>
            </fieldset>
        </>
    );
}

export default App;