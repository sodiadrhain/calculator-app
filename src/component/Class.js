import React, { Component } from "react";
import Button from "./component/Button";
import "./css/style.css";


class Application extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num: '',
            prevNum: '',
            sum: 0,
            sign: '',
            del: ''
        }

    }



    useValue = (symbol) => {


        this.setState({ num: this.state.num + symbol })
        this.setState({ sum: this.state.sum })
        this.setState({ del: this.state.num })
        var ccnum = this.state.num;
        ccnum = ccnum[ccnum.length - 1]

        if ((symbol === '+' || symbol === '-' || symbol === '/' || symbol === '*')) {


            var cnum = this.state.num;
            cnum = cnum[cnum.length - 1]
            this.setState({ prevNum: this.state.num })


            if (cnum === '+' || cnum === '-' || cnum === '/' || cnum === '*') {

                this.setState({ num: this.state.prevNum })


            } else {

                this.setState({ sum: this.state.num })

            }

            var mainPrev = this.state.num;
            var num = eval(String(mainPrev))
            this.setState({ sum: num });


        } else {


        }

    }


    useClear = () => {
        this.setState({ num: '' })
        this.setState({ sum: '' })
    }

    useBack = (symbol) => {

        var dnum = [this.state.num, symbol];
        var ynum = dnum.pop();
        console.log(dnum);
        this.setState({ del: dnum });
        this.setState({ num: dnum });


    }

    useSum = () => {

        var mainPrev = this.state.num;

        var num = eval(String(mainPrev))
        this.setState({ sum: num });
        this.setState({ num: num });

    }


    render() {

        const handleValue = [
            { symbol: '/', cols: 1, action: this.useValue },
            { symbol: '*', cols: 1, action: this.useValue },
            { symbol: 'Del', cols: '2a', action: this.useBack },
            { symbol: '7', cols: 1, action: this.useValue },
            { symbol: '8', cols: 1, action: this.useValue },
            { symbol: '9', cols: 1, action: this.useValue },
            { symbol: '-', cols: 1, action: this.useValue },
            { symbol: '4', cols: 1, action: this.useValue },
            { symbol: '5', cols: 1, action: this.useValue },
            { symbol: '6', cols: 1, action: this.useValue },
            { symbol: '+', cols: 1, action: this.useValue },
            { symbol: '1', cols: 1, action: this.useValue },
            { symbol: '2', cols: 1, action: this.useValue },
            { symbol: '3', cols: 1, action: this.useValue },
            { symbol: '.', cols: 1, action: this.useValue },
            { symbol: '0', cols: 1, action: this.useValue },
            { symbol: '=', cols: 2, action: this.useSum },
            { symbol: 'AC', cols: 1, action: this.useClear }
        ]

        return (
            <div className="body">
                <div>
                    <span className="prevNum">{this.state.num}</span>

                    <input type="text" value={this.state.sum} /><br></br></div>
                {handleValue.map((sys) => {

                    return (
                        <Button symbol={sys.symbol} cols={sys.cols} action={() => sys.action(sys.symbol)}  />
                    )

                })}
                <br />
                <h5>Developed by <a href="https://sodiadrhian.github.io/portfolio">Master Soji</a></h5>
            </div>
        )
    }

}

export default Application;

