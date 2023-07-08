import React from 'react'
const NavBar =(props)=>{

return(
<div style={styles.CartIconContainer}>
<img style={styles.CartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"/>
<span style={styles.cartCount}>{props.count}</span>
    </div>
);
}
const styles={
    CartIcon:{
        height:30,
        marginRight:20
    },
    CartIconContainer:{
        height:70,
        backgroundColor:'brown',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position:'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '5px 5px',
        position: 'absolute',
       top:5,
       right:5
      }

}
export default NavBar;