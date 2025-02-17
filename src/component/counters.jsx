import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    
    render() { 
        console.log('Counters - Rendered')
        const {onReset, onDelete, onIncrement, counters} = this.props //OBJECT DESTRUCTURING
        return (
            <React.Fragment>
                <button 
                    className='btn btn-primary btn-sm m-2'
                    onClick={onReset}>
                    Reset
                </button>
                {counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                )}
            </React.Fragment>
        );
    }
}
 
export default Counters;