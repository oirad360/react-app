import React, { Component } from 'react';

class Counter extends Component {
    /*state = {
        value: counter.value,
        //tags: ['tag1','tag2','tag3']
    }

    handleIncrement = () => {
        this.setState({value: this.state.value + 1})
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>Non ci sono tag!</p>
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }*/

    componentDidUpdate(prevProps, prevState){
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        if(prevProps.counter.value !== this.props.counter.value){
            //ajax call and get new data from the server
        }
    }

    componentWillUnmount(){
        console.log('Counter - Unmount')
    }

    render() {
        console.log('Counter - Rendered')
        const {counter, onIncrement, onDelete} = this.props
        return (
            <div>
                <h4>Counter #{counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => onIncrement(counter.id)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        return this.props.counter.value===0 ? 'Zero' : this.props.counter.value
    }
}
 
export default Counter;