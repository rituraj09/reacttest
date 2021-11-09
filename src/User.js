import React, {useState} from 'react'; 

function Print()
{
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [view, setView] = useState(false);

    function getData(val){
        setData(val.target.value);
        setView(false);
    }
    function pushData()
    {
        setName(data)
    }
    return (
    <div className="Print">
        <input type="text" onChange={getData}/>
        <button  onClick={()=> {pushData(); setView(true)}}>Click to Print</button>
        <div>
           <h1> {data}</h1>
           {
               view?
                <h2> {name}</h2>
                :
                false
           }
           
        </div>
    </div>
    )
}


export default Print;