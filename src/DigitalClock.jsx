import React,{useState, useEffect} from 'react';
function DigitalClock() {
     const [time,setTime]=useState(new Date());
     const [is12h, set12] = useState(true);
     useEffect(() => {
        const intervalId=setInterval(() => {
            setTime(new Date());
        },1000);
        return()=>{
            clearInterval(intervalId);
        }
     },[]);
     function formatTime()
     {
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridiem=hours>=12?"PM":"AM";
        hours=hours%12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
     }
     function padZero(num)
     {
        return (num<10?"0":"")+num;
     }
     function formatTime2()
     {
        let hours=time.getHours();
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} `;
     }
    
 return (
    <div className="page-wrapper">
      {/* Clock */}
      <div className="clock-container">
        <div className="clock">
          <span>{is12h ? formatTime() : formatTime2()}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={() => set12(true)}>12 HR</button>
        <button onClick={() => set12(false)}>24 HR</button>
      </div>
    </div>
  );
}
export default DigitalClock;