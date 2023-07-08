import React from 'react'
import Navbar from './navbar'

import Cart from './cart'
class App extends React.Component {
constructor(){
  super();
  this.state={
      products:[
      {
          price:9999,
      title:'Mobile Phone',
      qty:10,
      img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
      id:1
      },
      {
      price:999,
      title:'Watch',
      qty:1,
      img:"https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.webp?b=1&s=170667a&w=0&k=20&c=dRs8nww4M4ibLBD1UMUzBYcw13lnk3Z7s0THB9_SM6Y=",
      id:2
     },
 {
    price:99999,
      title:'Laptop',
     qty:1,
     img:'https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.webp?s=1024x1024&w=is&k=20&c=1JQYD-7e9EfVR4LCekw-NvYxyX23U81k-TRFJ70SXqY=',
       id:3
              }
      ]
  }
}
handleIncreaseQuantity=(product)=>{
  console.log('Hey please increase quantity of', product);
  const{products}=this.state;
  const index=products.indexOf(product);
  products[index].qty+=1;
  this.setState({
      products
  })

}
handleDecreaseQuantity=(product)=>{
  console.log('Hey please decrease quantity of', product);
  const{products}=this.state;
  const index=products.indexOf(product);
  if(products[index].qty==0){
      return;
  }
  products[index].qty-=1;
  this.setState({
      products
  })

}
handleDeleteProduct=(id)=>{
  const{products}=this.state;
  const items=products.filter((item)=>item.id!==id);
  this.setState({
products:items
  })
}
getCartCount =()=>{
  const {products}=this.state;
  let count =0;
  products.forEach((product)=>{
    count+=product.qty;
   })
  return count ;
}
getCartTotal =()=>{
  const {products}=this.state;
  let total =0;
  products.forEach((product)=>{
    total+=product.price*product.qty;
   })
  return total ;
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
    
      <Navbar count={this.getCartCount()}/>
      <Cart
      products ={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onDeleteProduct={this.handleDeleteProduct}/>
    <div style={{fontSize:20, color:'red'}}>Total: {this.getCartTotal()}</div> 
    </div>
  );
}
}
export default App;
