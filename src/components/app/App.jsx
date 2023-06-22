import React, { useState } from "react";
import { Statistics } from "../Statistics/Statics";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";



export const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
  const options = Object.keys({ good, neutral, bad })

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage  = total => {
    return (total) ? Math.round(good / total * 100 ) :  0;
  }

  const percentage = countPositiveFeedbackPercentage(total);

  const handleChangeCount  = data => {
      switch (data) {
        case 'good':
          setGood(prev => prev + 1);
          break;
        case 'neutral':
          setNeutral(prev => prev + 1);
          break;
        case 'bad':
          setBad(prev => prev + 1);
          break;

        default:
          return;
      }
    }
  
    return (
      <>
        <Section title ="Please liave feedback" >
          <FeedbackOptions
            // options={options}
            good='good'
            neutral='neutral'
            bad='bad'
            onLeaveFeedback = {handleChangeCount }
          />
        </Section>

        <Section title ="Statistic" >
          {
            !total
            ? <Notification message = "There is no feedback" />
            : <Statistics
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total = {total}
                percentage = {percentage}
              />                                
          }
        </Section>
      </>
    )
  
}

