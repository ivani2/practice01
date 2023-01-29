import { Component } from "react";
import NavBar from "./navbar";
import Counters from "./counters";

class MainPageCounters extends Component {

    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 7 },
            { id: 5, value: 0 },
            { id: 6, value: 0 },

        ]
     }

     constructor(  ){
        super(  );
        console.log('Mainpage - Constructor');
        // this.state =  this.props.something;
     }

     componentDidMount(){
        //AJAX
        // this.setState( { movies } )
        console.log('MainPage - Mounted');
     }

    handleIncrement = ( counter ) => {
        console.log( counter );
        const counters = [ ...this.state.counters ];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState( { counters } );
        console.log( this.state.counters[0] );
    };

    handleDelete = ( counterId ) =>{
        console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter( c => c.id !== counterId );
        this.setState( { counters } )
    };

    handleReset = (  ) =>{
        const counters = this.state.counters.map(
            c =>
            {
                c.value = 0;
                return c;
            }
        );
        this.setState( { counters } );
    };

    render() {
        console.log( "Mainpage - Rendered" );
        return (
            <div>
                <NavBar totalCounters={ this.state.counters.filter( c => c.value > 0).length } />
                <main className='container'>
                    <Counters
                        counters={ this.state.counters }
                        onReset={ this.handleReset }
                        onIncrement={ this.handleIncrement }
                        onDelete={ this.handleDelete }
                    />
                </main>
            </div>
        );
    }
}

export default MainPageCounters;
