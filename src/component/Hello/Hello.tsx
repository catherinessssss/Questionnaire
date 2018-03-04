import * as React from 'react';
import { Props } from './HelloInterface';
import './Hello.css';

class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExcalmationMarks(enthusiasmLevel)}
                </div>
            </div>
        );
    }
}

export default Hello;

function getExcalmationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}
