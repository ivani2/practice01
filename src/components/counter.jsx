// import React, { Component } from 'react'

// class Counter extends Component {
//     state = {
//         count: 0,
//         tags: [ 'tag1', 'tag2', 'tag3' ]
//      };

//     renderTags(){
//         if( this.state.tags.length === 0 ) return <p>There are no tags!</p>;
//         return <ul>{ this.state.tags.map( tag => <li key={ tag }> { tag } </li> ) }</ul>;
//     }

//     render() {
//         return (
//         <React.Fragment>
//             { this.state.tags.length === 0 && "Please create a new tag!" }
//             { this.renderTags() }
//         </React.Fragment>
//         );
//     }


// }

// export default Counter;


import React, { Component } from 'react'

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // tags: [ 'tag1', 'tag2', 'tag3' ]
    //     // imageUrl: 'https://picsum.photos/200',
    //  };

    //  styles = {
    //     fontSize: 30,
    //     fontWeight: "bold",
    //  }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement(){
    //     console.log("Increment clicked", this);
    //     //obj.method(); <-- this on the class of that object
    //     //function(); <-- this on the window
    // }

    // handleIncrement = ( number ) =>{
    //     // console.log( number );
    //     this.setState( { value: this.state.value + 1 } );
    //     // this.state.value++;
    //     // console.log("Increment clicked", this.state.value);
    //     //obj.method(); <-- this on the class of that object
    //     //function(); <-- this on the window
    // }

    // doHandleIncrement = () =>{
    //     this.handleIncrement( { id: 1 } );
    // }

    componentDidUpdate( prevProps, prevState){
        //AJAX?
        console.log( 'prevProps', prevProps );
        console.log( 'prevState', prevState );
        if( prevProps.counter.value !== this.props.counter.value ){
            //ajax update call to the server backend
        }

    }

    componentWillUnmount(){
        console.log('Counter - Unmount');
    }

    render() {

        // console.log( 'props', this.props );
        console.log("Counter - Rendered");

        return (
        <div>
            {/* { this.props.children } */}
            <span className= { this.getBadgeClasses() } > { this.formatCount() } </span>
            <button
                onClick=
                    {
                    () =>{ this.props.onIncrement( this.props.counter ) }
                    }
                className='btn btn-secondary btn-sm'
            >Increment
            </button>
            <button
                onClick={ () => { this.props.onDelete( this.props.counter.id ) } }
                className="btn btn-danger btn-sm m-2"
                >Delete
            </button>
            <br/>
            {/* <ul>
                { this.state.tags.map( tag => <li key={ tag }> { tag } </li> ) }
            </ul> */}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' :  count;
    }

}

export default Counter;

