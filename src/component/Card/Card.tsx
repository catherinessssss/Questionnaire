import * as React from 'react';
import { Card as CardUI, CardTitle, CardText } from 'material-ui/Card';
import Accordance3 from '../Answers/Accordance3/Accordance3';
import './Card.css';

class Card extends React.Component {
    constructor( props: number ) {
        super(props);
    }

    render() {
        const titleStyle = {
            background: '#fbfbfb',
            margin: '-16px',
            padding: '16px',
            fontSize: '14',
            color: '#0eb5f8'
        };

        return (
            <CardUI>
                <CardTitle title="Q: 下面的口语粤语是否与书面粤语意思一致?" titleStyle={titleStyle}/>
                <CardText />
                <Accordance3 />
            </CardUI>
        );
    }
}

export default Card;
