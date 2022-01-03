import { max } from 'd3';
import React, { useEffect, useRef,useState } from 'react';

import './App.scss';
import timelineDummy from './timeline-dummy.js'


function App() {
  //minimum and maximum years
  const [minYear, setMinYear] = useState(0);
  const [maxYear, setMaxYear] = useState(12021);

  //range min and rangee max statees
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(15);
  const [timelineRange, setTimelineRange] = useState(1);

  //currentYear state
  const [currentYear, setCurrentYear] = useState(0);
  //arrays for timeline
  const [timelineYears, setTimelineYears] = useState([]);



    //useeffect timelineRange
    useEffect(() => {
      let arrays  = Array.from(Array(maxYear).keys()).map((year, index) => {
          if(index/timelineRange ===  0)
          return (
            <div 
              /* if minYear is a multiple of 10, add class "seperator" */
              className={`timeline-unit level2 seperator`} 
              id={`year${maxYear-index}`}
              key={index}
              >
              <p>{maxYear-index}</p>
            </div>
          )
        })
      console.log(timelineRange)
      console.log(arrays)
        setTimelineYears(arrays)
    }, [timelineRange]);

  return (



    <div className="App">

      <div className="test">
        <div className="test__maxYear">
          <input type="number" value={maxYear} onChange={(e) => setMaxYear(e.target.value)} />
        </div>
        <div className="test__minYear">
          <input type="number" value={minYear} onChange={(e) => setMinYear(e.target.value)} />
        </div>
        Range :{timelineRange}
      </div>
      <div className="timeline-slider">
        {/* Range slider */}
        <input type="range" min={rangeMin} max={rangeMax}  onChange={(e) => setTimelineRange(e.target.value)} />
      </div>
      <div className="timeline-control__wrap">
        <div className="timeline-control">
        {/*map <div className="timeline-unit"></div> yearDiff times */}
          {timelineYears}
        </div>
      </div>
      <main>
        <h1>{currentYear}</h1>
      </main>
    </div>
  );
}

export default App;
