import { max } from 'd3';
import React, { useEffect, useRef,useState } from 'react';

import './App.scss';
import timelineDummy from './timeline-dummy.js'


function App() {
  //minimum and maximum years
  const [minYear, setMinYear] = useState(10898);
  const [maxYear, setMaxYear] = useState(12021);
  //difference between minimum and maximum years
  const [yearDiff, setYearDiff] = useState(maxYear - minYear);
  //useEffect on minYear and maxYear to update the timeline
  useEffect(() => {
    setYearDiff(maxYear - minYear);
  }, [maxYear, minYear]);

  //timelinerange
  const [timelineRange, setTimelineRange] = useState(30);
  //FUNCTION TO SET  LEVEL 1 TIMELINE RANGE
  const setTimelineRangelevel1 = () => {
    setTimelineRange(30);
  }

  const [currentYear, setCurrentYear] = useState(maxYear);
  function scrollIntoClickedYear(year) {
    setCurrentYear(year);
    
    setTimelineRangelevel1()
  }
  useEffect(() => {
    console.log(currentYear)
    document.getElementById(`year${currentYear}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }, [currentYear]);


  return (
    <div className="App">

      <div className="test">
        <div className="test__maxYear">
          <input type="number" value={maxYear} onChange={(e) => setMaxYear(e.target.value)} />
        </div>
        <div className="test__minYear">
          <input type="number" value={minYear} onChange={(e) => setMinYear(e.target.value)} />
        </div>
        Diffetence :{yearDiff} <br />
        Range :{timelineRange}
      </div>
      <div className="timeline-slider">
        {/* Range slider */}
        <input type="range" min={30} max={1000}  onChange={(e) => setTimelineRange(e.target.value)} />
      </div>
      <div className="timeline-control__wrap">
        <div className="timeline-control">
        {/*map <div className="timeline-unit"></div> yearDiff times */}
          {
            Array.from(Array(yearDiff).keys()).map((year, index) => {

              /* if timerange is in LEVEL 1 */
              if(timelineRange<=240){
                if((maxYear-index) % 10 === 0)
                {
                  return (
                  <div className={`timeline-unit seperator `} 
                    id={`year${maxYear-index}`}
                    key={index}
                    /*stytle margin-top*/
                    style={{marginBottom: `${ (1000/timelineRange*1.5)}px`} }
                    onClick={() => scrollIntoClickedYear(maxYear-index)}
                  >
                    <p>{maxYear-index}</p>
                  </div>
                )}
                else{
                  return (
                    <div className={`timeline-unit`} 
                      key={index}
                      id={`year${maxYear-index}`}
                      /*stytle margin-top*/
                      style={{marginBottom: `${ (1000/timelineRange*1.5)}px`} }
                      onClick={() => scrollIntoClickedYear(maxYear-index)}
                    ></div>
                  )
                }
              }
              
              /* if timerange is in LEVEL 2 */
              else{
                if((maxYear-index) % 10 === 0)
                {
                  if((maxYear-index) %50 ===0){
                      return (
                        <div 
                          /* if minYear is a multiple of 10, add class "seperator" */
                          className={`timeline-unit level2 seperator`} 
                          id={`year${maxYear-index}`}
                          key={index}
                          /*stytle margin-top*/
                          style={{marginBottom: `${ (1000/timelineRange*10)}px`} }
                          onClick={() => scrollIntoClickedYear(maxYear-index)}
                          >
                          <p>{maxYear-index}</p>
                        </div>
                      )
                  }
                  else{

                    return (
                      <div 
                        /* if minYear is a multiple of 10, add class "seperator" */
                        className={`timeline-unit level2`} 
                        id={`year${maxYear-index}`}
                        key={index}
                        /*stytle margin-top*/
                        style={{marginBottom: `${ (1000/timelineRange*10)}px`} }
                        onClick={() => scrollIntoClickedYear(maxYear-index)}
                        >
                      </div>
                    )
                  }
                  }
              }
              
            })
          }
        </div>
      </div>
      <main>
        <h1>{currentYear}</h1>
      </main>
    </div>
  );
}

export default App;
