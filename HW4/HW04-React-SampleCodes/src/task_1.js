

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },

                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },

                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },

                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },

                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },

                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },
                
            ],
            isAscending :true
        };
        // this.incrementStock = this.incrementStock.bind(this.state.cars);
        // this.compareColumn.bind(this);
        this.sortButton = this.sortColumn.bind(this);
        //this.renderData.bind(this);
    }
    renderData() {
        return this.state.cars.map((car, index) => {
           const { manufacturer, model, year, stock, price } = car
           return (
              <tr key={model}>
                 <td>{manufacturer}</td>
                 <td>{model}</td>
                 <td>{year}</td>
                 <td>{stock}</td>
                 <td>{"$"+price+".00"}</td>
                 <td className='increment'>
                        <button onClick={this.incrementStock.bind(this,index)}>increment</button>
                </td>
              </tr>
           )
        })
     }

    incrementStock(index){
        const newCars = [...this.state.cars];
        newCars[index].stock= newCars[index].stock + 1;
        this.setState(newCars);
    }
    sortColumn(){
        const newCars = [...this.state.cars];
        const newAscending = this.state.isAscending;
        newCars.sort(this.compareColumn('year',newAscending))
        this.setState((state) => {
            return {cars: newCars,
                isAscending: !state.isAscending,
             }
        });
        
    }

    compareColumn(key, isAsc){
        return function (a, b) {
            if (isAsc){
                if (a[key] < b[key]) return -1;
                if (a[key] > b[key]) return 1;
            }
            if (a[key] < b[key]) return 1;
            if (a[key] > b[key]) return -1;
        };
    }
    
    render() {
        return (
            <div>
                <table id='cars'>
                <tbody>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th key = 'year' onClick={this.sortButton}>Year</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Option</th>
                        
                    </tr>
                    {this.renderData()}
                </tbody>
                </table>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("app"));
