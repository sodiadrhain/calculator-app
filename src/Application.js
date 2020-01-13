import React, {Component} from "react";
import Button from "./component/Button";
import "./css/style.css";

class Application extends Component {

    constructor(props){
    super(props);

    this.state ={
        num: '',
        prevNum: '',
        sum: 0,
        sign: ''
    }

    }



 useValue = (symbol) => {
    
   
     this.setState({num: this.state.num + symbol})
     this.setState({  sum: this.state.num + symbol })

     var ccnum = this.state.num;
     ccnum = ccnum[ccnum.length - 1]

     if ((symbol === '.') && (ccnum === '+' || ccnum=== '-' || ccnum === '/' || ccnum === '*') ) {

         this.setState({ num: this.state.prevNum })
     }

     if ((symbol === '+' || symbol === '-' || symbol === '/' || symbol === '*')){    
         

         var cnum = this.state.num;
         cnum = cnum[cnum.length - 1]
         this.setState({prevNum: this.state.num})
        
        
         if (cnum === '+' || cnum === '-' || cnum === '/' || cnum === '*') {
            
             this.setState({ num: this.state.prevNum})
             
             
         } else{ 
             
        this.setState({ sum: this.state.num })
        
        
        this.setState({sum: ''})


         }
         var mainPrev = this.state.num;
         var num = eval(String(mainPrev))
         this.setState({ sum: num });
 

    } else{
         this.setState({ sum: symbol })
        
    }



     
    

    }


useClear = () => {
        this.setState({ num: '' })
    this.setState({ sum: '' })
    }

useSum = () => {

    var mainPrev = this.state.num;
  
    var num = eval(String(mainPrev))
    this.setState({ sum: num});
    this.setState({ num: num });

    }


render(){

    const handleValue = [
        { symbol: '/', cols:1, action:this.useValue },
        { symbol: '*', cols:1, action:this.useValue },
        { symbol: 'C', cols:'2a', action:this.useClear },
        { symbol: '7', cols:1, action:this.useValue },
        { symbol: '8', cols:1, action:this.useValue },
        { symbol: '9', cols:1, action:this.useValue },
        { symbol: '-', cols:1, action:this.useValue },
        { symbol: '4', cols:1, action:this.useValue },
        { symbol: '5', cols:1, action:this.useValue },
        { symbol: '6', cols:1, action:this.useValue },
        { symbol: '+', cols:1, action:this.useValue },
        { symbol: '1', cols:1, action:this.useValue },
        { symbol: '2', cols:1, action:this.useValue },
        { symbol: '3', cols:1, action:this.useValue },
        { symbol: '.', cols:1, action:this.useValue },
        { symbol: '0', cols:1, action:this.useValue },
        { symbol: '=', cols:3, action:this.useSum }
    ]

    return(
        <div>
            <div> 
    <span className="prevNum">{this.state.num}</span>

                <input type="text" value={this.state.sum} /><br></br></div> 
            {handleValue.map((sys, i) => {

                return (
                    <Button symbol={sys.symbol} cols={sys.cols} action={ () => sys.action(sys.symbol)} key={i} />
                )

            })}
            </div>
    )
}

}

export default Application;