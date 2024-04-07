import React,{ useState } from 'react';
function DataBinding() {
    const [data, setData] = useState({
        name: "Aayush",
        age: 21
    })
    const handleChange=(event)=>{
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    return (
        <div>
            <h2> Data Binding</h2>
            <h4>
                One Way binding: {data.name}- {data.age}
            </h4>
            <div>
                <input type='text' value={data.name} onChange = {handleChange}/>
                <input type='text' value={data.age}/>
                
            </div>
        </div>
    )
}
export default DataBinding;