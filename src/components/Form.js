import React,{useState} from 'react'
import SendMeetingData  from '../api';



function Form() {
    const [formvalue,setFormValue] = useState({id:'',starttime:'',endtime:''});
   
    const handelInput = (event)=>{
     const {name,value} = event.target;
     setFormValue({...formvalue,[name]:value});
    }
     const handelFormsubmit = (event)=>{
      event.preventDefault();
      console.log(formvalue)
      SendMeetingData(formvalue);
 
    }

  return (
    <div>
      <form onSubmit={handelFormsubmit}>
        <label className='label'>Enter Your ID:</label>
        <input type='text' name='id' value={formvalue.id} placeholder='id' onChange={handelInput} className='input' ></input>
        <br/>
        <label className='label'>Meeting Strart Time:</label>
        <input type='time'  name='starttime' value={formvalue.starttime}     placeholder='time'  onChange={handelInput} className='input2'></input>
        <br></br>
        <label className='label'>Meeting Finish Time:</label>
        <input type='time' name='endtime' value={formvalue.endtime}  placeholder='time'  onChange={handelInput} className='input3'></input>
        <br/>
        <span className='instruction'><input type='checkbox' readOnly checked />Lock Meeting Room After 5 minutes When Meeting Has started.. </span>
        <br/>
        <button className='button'>Strat Meeting</button>
       </form>
    </div>
  )
}

export default Form








