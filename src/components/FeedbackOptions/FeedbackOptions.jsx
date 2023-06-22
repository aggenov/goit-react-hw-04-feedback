import PropTypes from 'prop-types';
import { List, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  
  return (
    <List>
      <Button type='button' onClick={() => { onLeaveFeedback(good) }}>good</Button>
      <Button type='button' onClick={() => { onLeaveFeedback(neutral) }}>neutral</Button>
      <Button type='button' onClick={() => { onLeaveFeedback(bad) }}>bad</Button>
      </List>
  );
}

FeedbackOptions.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
}