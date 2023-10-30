import React, { useEffect, useState } from 'react'

function CountDown() {
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)

    const dedline = 'September, 30, 2023'

    const getTime = () => {
        const time = Date.parse(dedline)-Date.now()
        setDay(Math.floor(time/(1000*60*60*24)))
        setHour(Math.floor(time/(1000*60*60)%24))
        setMin(Math.floor(time/(1000/60)%60))
        setSec(Math.floor(time/(1000)%60))
    }

    useEffect(()=> {
        const interval = setInterval(() => getTime(dedline), 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <div className='container-fluid countdown-wrapper' >
        <div className="container">
            <div className="counter-main-section text-center">
                <h2>Up to 10% discount</h2>
                <h2 style={{color:'#92278F'}} >throughout the month of September</h2>
                <div className="col-md-11 col-xl-8 offset-xl-2 offset-md-1">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className='coundown-single-item' style={{background:'#70AA4D'}} >
                        <span>{day < 10 ? '0'+day: day }</span>
                        <h5>DAYS</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className='coundown-single-item' style={{background:'#1990B8'}} >
                        <span>{hour < 10 ? '0'+hour: hour }</span>
                        <h5>HOURES</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className='coundown-single-item'  style={{background:'#C8282D'}} >
                        <span>{min < 10 ? '0'+min: min }</span>
                        <h5>MINUTES</h5>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className='coundown-single-item' style={{background:'#FFB84D',color:'#000'}} >
                        <span>{sec < 10 ? '0'+sec: sec }</span>
                        <h5>SECONDS</h5>
                        </div>
                    </div>
                </div>
                </div>
                <div className="countdown-button">
                    <div>
                        <a href="/web-development" style={{background:"#70AA4D", color:'#fff'}} >Web Devlopment</a>
                        <a href="/app-development" style={{background:"#1990B8", color:'#fff'}} >App Devlopment</a>
                        {/* <a href="/digital-marketing" style={{background:"#C8282D", color:'#fff'}} >Digital Marketing</a>
                        <a href="/ui-ux-design" style={{background:"#FFB84D", color:'#000'}} >UI/UX Design</a> */}
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CountDown