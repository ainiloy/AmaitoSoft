import React, { useEffect, useState } from 'react';

function LearnPageCounter() {
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const dedline = Date.parse('August 20, 2023 18:00:00');

    const getTime = () => {
        const time = dedline - Date.now();
        setDay(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMin(Math.floor((time / (1000 * 60)) % 60));
        setSec(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(getTime, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <div className='container-fluid ' >
        <div className="container">
            <div className="counter-main-section text-center">
                <h2>Registration is still open</h2>
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="seminer-counter">
                        <div className='coundown-single-item' >
                        <span>{day < 10 ? '0'+day: day }</span>
                        <h5>DAYS</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="seminer-counter">
                        <div className='coundown-single-item' >
                        <span>{hour < 10 ? '0'+hour: hour }</span>
                        <h5>HOURES</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="seminer-counter">
                        <div className='coundown-single-item' >
                        <span>{min < 10 ? '0'+min: min }</span>
                        <h5>MINUTES</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="seminer-counter">
                        <div className='coundown-single-item' >
                        <span>{sec < 10 ? '0'+sec: sec }</span>
                        <h5>SECONDS</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LearnPageCounter