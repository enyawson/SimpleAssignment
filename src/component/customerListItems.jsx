
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

const styleTopButton={width:'100%',}

export default class customerListItems extends Component {
  constructor(props) {
    super();
    this.state = {
        list:[
            {
            id: 1,
            itemName:'Electircal Wire',
            quantity:5
            },
            {
                id: 2,
                itemName:'Fork lifting Wire',
                quantity:5
            },
            {
                id: 3,
                itemName:'Inductor pads',
                quantity:5
            },
            {
                id: 4,
                itemName:'Accelerating pads',
                quantity:5
            },
    
        ],
        selectedList:[],
        quantity:"",
        itemInserted:'',
    };

   
  }

  callApi=()=>{
  }

 handleAddToList=()=>{
    let addItem = this.state.selectedList.concat('ababab')
    this.setState({selectedList: addItem})
    console.log('hhggg', this.state.selectedList)
 }

 handleInsertedItemChange = (item)=>{
    this.setState({
        quantity:item
    })

 }

 handleQunatityChange =(item)=>{
     this.setState({
         itemInserted:item
     })

 }


 insertItems=()=>{
    return(
        <form >
        <div class="form-row" style={{justifyContent:'center'}}>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Item</label>
                <input type="text" class="form-control"  placeholder="Enter item"/>
            </div>
            <div class="form-group col-md-2">
                <label for="inputPassword4">Quantity</label>
                <input type="password" class="form-control"  placeholder=""/>
            </div>
            <div style={{marginTop:30}}>
                 <button type="submit" class="btn btn-primary">Insert</button>
            </div>
           
        </div>
      </form>
    
    );

 }

 

    actionButtons=()=>{
        return(
            <div class="btn-group" role="group" aria-label="main group" style={{width:'80%',paddingTop:20, paddingBottom:20}}>
                <div className="btn-group-lg" role="group" aria-label="First Group" style={{flex:1, backgroundColor:'green', margin:5}}>
                    <button  style={styleTopButton}  type="button" class="btn  text-white">Add Items</button>
                </div>
                <div className="btn-group-lg text-white" role="group" aria-label="Second Group"  style={{flex:1, backgroundColor:'green', margin:5}}>
                     <button type="button" class="btn  text-white" style={styleTopButton} >Delete</button>
                </div>
                <div className="btn-group-lg" role="group" aria-label="Third group" style={{flex:1, backgroundColor:'green', margin:5}}>
                     <button style={styleTopButton} type="button" class="btn  text-white">Update</button>
                </div>
                <div className="btn-group-lg" role="group" aria-label="fourth group" style={{flex:1, backgroundColor:'green', margin:5}}>
                     <button style={styleTopButton} type="button" class="btn  text-white">Retrieve</button>
                </div>
            </div>
        )

    }

    fillTable() {
        return (<div className="container">
            <h2>Customer</h2>
           
            <p>Please select from the list of items available</p>
            
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                    this.state.list.map((item, index)=> 
                        <tbody key={index} className="Table-body">
                            <tr>
                                <td>{item.itemName}</td>
                               
                                <td>
                                <button type="button" className="btn btn-success" onClick={this.handleAddToList}>Add</button>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
               
            
        </div>);
  
       
    }
    render() {
        return(
            <div>
                <div>{this.actionButtons()}</div>
                <div>{this.fillTable()}</div> 
                <div> {this.insertItems()}</div>
            </div>
           
        );
      }
}


