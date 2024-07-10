import './css/countdown.css'


export const Countdown = () => {
  return (
    <div>
         <div className="countdowns">
                    <div className="countdown">
                      <div className="cd-each">
                        <span className="countdown-value">02</span>
                        <span className="countdown-text">days</span>
                      </div>

                      <div className="cd-each">
                        <span className="countdown-value">5</span>
                        <span className="countdown-text">Hours</span>
                      </div>

                      <div className="cd-each">
                        <span className="countdown-value">32</span>
                        <span className="countdown-text">Minutes</span>
                      </div>

                      <div className="cd-each">
                        <span className="countdown-value">56</span>
                        <span className="countdown-text">Seconds</span>
                      </div>
                    </div>
                  </div>
    </div>
  )
}
