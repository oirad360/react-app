import React, { Component } from 'react';
import NavBar from './component/navbar';
import Counters from "./component/counters";

class App extends Component {
    state = { 
        counters: [
            {id: 0, value: 0},
            {id: 1, value: 1},
            {id: 2, value: 2},
            {id: 3, value: 3}
        ],
        boh: "q"
    }
    //constructor, componentDidMount e render sono LIFECYCLE HOOKS, sono disponibili SOLO NEI COMPONENT!! Ad es nella NavBar non ci sono
    //perchè la navbar non è stata definita come component ma come statless functional component (ovvero non è una classe bensì una funzione che fa solo il render perchè è un componente senza stato)
    constructor(props) { //dobbiamo passare props al costruttore e al super in modo da poter accedere a this.props da dentro il costruttore
        super(props)
        console.log('App - Constructor', this.props)
    }

    componentDidMount(){
        //quando un component è mounted significa che è stato inserito nel DOM
        //qui è dove di solito si effettuano ajax calls
        console.log('App - Mounted')
    }

    render() { 
        console.log('App - Rendered')
        //quando un component è rendered anche tutti i children verranno renderizzati ricorsivamente
        //in questo caso i children sono NavBar e Counters
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length}/>
                <main className='container'>
                    <Counters
                        counters = {this.state.counters}
                        onIncrement = {this.handleIncrement}
                        onReset = {this.handleReset}
                        onDelete = {this.handleDelete}
                    />
                </main>
            </React.Fragment>
            
        );
    }

    /* handleIncrement = (counter) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].value++
        this.setState({counters})
    } */

    handleIncrement = (counterId) => {
        const counters = this.state.counters.map(counter => {
            return counter.id===counterId ? 
            {...counter, value: counter.value+1} :
            counter
        })
        this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value=0
            return c
        })
        this.setState({counters})
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
    }

}
 
export default App;