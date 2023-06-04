import axios from 'axios';

const SendMeetingData = async(formvalue)=>{
    try{

    
    const Respons = await axios.post("https://meetingbackendapi.onrender.com/create",formvalue)
    console.log(Respons);

    }
    catch(e){
        console.log(e)
    }
}

export default SendMeetingData;