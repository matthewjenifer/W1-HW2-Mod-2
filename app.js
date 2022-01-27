class App extends React.Component {
    state = {
        supplies: suppliesList,
        item: '',
        units: '',
        quantity: 0,
        price: 0,
    };

    handleChange = e => {
        this.setState({
            [e.target.id]:e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('handling submit')
        const newItem = {
        item: this.state.item,
        quantity: this.state.quantity,
        price: this.state.price,
        }
        this.setState({
            supplies:[newItem, ...this.state.supplies],
            item:'',
            quantity: 0,
            price: 0
        })
    }
    
    render() {
        console.log(this.state.supplies)
        return(
            <div>
                <form>
                    <label htmlFor="item">Item:</label>
                    <input type="text" id="item" onChange={this.handleChange} value={this.state.item}></input>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" onChange={this.handleChange} value={this.state.quantity}></input>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" onChange={this.handleChange} value={this.state.price}></input>
                    <button onClick={this.handleSubmit}>Submit:</button>
                </form>
                {
                    this.state.supplies.map((x) => (
                        <div class="card">
                            <h1>{x.item}</h1>
                            <h1>{x.units}</h1>
                            <h1>{x.price}</h1>
                            <h1>{x.quantity}</h1>
                        </div>
                    ))
                }
            </div>
            )
    }

}

ReactDOM.render(
    <App/>,
    document.querySelector('#container')
);