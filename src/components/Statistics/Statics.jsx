import style from './Statics.styled';

export const Statistics =({ good, neutral, bad, total, percentage })=> {    
    
    const elements = ['Good: ', 'Neutral: ', 'Bad: ', 'Total: ', 'Positives feedback: '];
    const values = [ good, neutral, bad, total, percentage ];

    return (
        <style.List>
            {elements.map(( element, index ) =>(
                <style.Item key = {element}>
                    <style.Text>
                        {element}<style.Number>{ index!==4 ? values[index] : values[index] + '%' }</style.Number>
                    </style.Text>
                </style.Item>
            ))}
        </style.List>   
    ) 
}