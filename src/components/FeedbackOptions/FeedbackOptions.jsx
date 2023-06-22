import PropTypes from 'prop-types';
import { List, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <List>
      { options.map( option => {
            return (
              <li key={ option }>
                <Button onClick={()=>{onLeaveFeedback( option.toLowerCase() )}}> {option} </Button>
              </li>
            )
          })
        }
      </List>
  );
}

FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
}