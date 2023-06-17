import React from "react";
import {List, Button} from "./FeedbackOptions.styled";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

  return (
    <List>
        { options.map( option => {
            return (
              <li key={ option }>
                <Button onClick={()=>{onLeaveFeedback( option.toLowerCase() )}}> 
                  {option.charAt(0).toUpperCase() + option.slice(1)} 
                </Button>
              </li>
            
            )
          })
        }
      </List>
  );
}