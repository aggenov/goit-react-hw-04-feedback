import PropTypes from 'prop-types';
import style from './Statics.styled';


export const Statistics =({ good, neutral, bad, total, percentage })=> {    

    return (
        <style.List>
            
                <style.Item >
                    <style.Text>
                    Good:  <style.Number>{ good }</style.Number>
                    </style.Text>
            </style.Item>
            <style.Item >
                    <style.Text>
                    Neutral:  <style.Number>{ neutral }</style.Number>
                    </style.Text>
            </style.Item>
            <style.Item >
                    <style.Text>
                    Bad:  <style.Number>{ bad }</style.Number>
                    </style.Text>
            </style.Item>
            <style.Item >
                    <style.Text>
                    Total:  <style.Number>{ total }</style.Number>
                    </style.Text>
            </style.Item>
            <style.Item >
                    <style.Text>
                    Positives feedback:  <style.Number>{ percentage }%</style.Number>
                    </style.Text>
            </style.Item>
                
            
        </style.List>   
    ) 
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}