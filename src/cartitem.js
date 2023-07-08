import React from 'react'
const CartItem =(props)=>{
// constructor(){
//     super();
//     this.state={
//         price:9999,
//         title:'Mobile Phone',
//         qty:1,
//         img:"https://tse3.mm.bing.net/th?id=OIP.fgk1nqCD-Ufjxm9SPdkjiwHaEg&pid=Api&P=0&h=180"
//     }
    // this.increaseQuantity= this.increaseQuantity.bind(this);
// }

// increaseQuantity=()=>{
   
//     console.log('this', this.state)
//     // setState form 1
//     // this.setState({
//     //    qty:this.state.qty+1 
//     // })
//     // setState form-2
//     this.setState((prevState)=>{
//         return{
//             qty:prevState.qty+1
//         }
//     },()=>{
//         console.log('this',this.state)
//     })
// }
// decreaseQuantity=()=>{
//    const{qty}=this.props.product;
//    if(qty===0){
//     return;
//    }
//     console.log('this', this.state)
//     // setState form 1
//     this.setState({
//        qty:this.state.qty-1 
//     })
// }


    const{price ,qty , title}=props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
return(
<div className="cart-items">
<div className="left-block">
    <img  style={styles.image} src={product.img}/ >
</div>
<div className="right-block">
    {/* <div style={{fontSize:25}}>{this.state.title}</div> */}
    <div style={{fontSize:25}}>{title}</div>
    <div style={{color:'green'}}>Rs. {price}</div>
    <div style={{color:'green'}}> Qty:{qty}</div>
    <div className="cart-items-action">
        { /*Buttons*/}
        <img alt="increase" 
        className="action-icon" 
        src="https://cdn-icons-png.flaticon.com/128/561/561169.png" 
        onClick={()=>onIncreaseQuantity(product)}/>
        <img alt="decrease"
         className="action-icon" 
         src="https://cdn-icons-png.flaticon.com/128/561/561179.png" 
         onClick={()=>onDecreaseQuantity(product)}/>
        <img alt="delete"
         className="action-icon" 
         src="https://cdn-icons-png.flaticon.com/128/484/484611.png" 
         onClick={()=>onDeleteProduct(product.id)}/>
    </div>

</div>

</div>
);
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'grey',
    }
}
export default CartItem;