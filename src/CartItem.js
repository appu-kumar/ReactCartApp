import React from 'react'

// in jsx file we can give css in js object okk make sure
// state is javascript object like pojo in java and poco in c shar
    //  constructor(props)
    //  {
    //     super(props);                          // it is just calling the constructor of the React.Component
    //     // this.state={                     // state is nothing but simple js object
    //     //      name:'Mobile phone',
    //     //      price:25,
    //     //      image:'',
    //     //      qty:1
    //     // }
    //     //  this.testing();
    //  }

//     testing()
//     {
//        const promise=new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                  resolve("200");
//             },5000);

//             reject("400");
//         })
//   promise.then((success)=>{
//       this.setState((prevState)=>{
//         return {
//            qty:prevState
//         }
//       })
//   });
//   promise.catch((error)=>{
//     console.log("error::"+error);
//   })

// }
    // increaseQty=()=>{
//         // this.state.qty+=1;             // we can do but react will not understand okk
        

//         // fist way 
//         // this.setState(                       // this is method of react that change the variable 
//         //     {
//         //      name:'camera'
//         //     }
//         // );

//         // second way
//         //jab tumhe prev state ki requirement ho okk
//         this.setState((prevState)=>{                           // callback function react automatically will do okk 
//           return {
//             qty:prevState.qty+1
//           }
//         })


//     }


//    decreaseQty=()=>
//    {

//     const {qty}=this.state        // destructring of the object
//     if(qty==0)
//     {
//         return 0;
//     }
//     this.setState(                // writing two or more times of the setState is called batching whick is done by react ye do bar likho or 100 bar ek hi baar chlega lst wala  
//         {
//           qty:this.state.qty-1
//        }
//     );

//     this.setState(            // this is asynch method
//         {
//           qty:this.state.qty-1
//        }
//     );
//    }
//    deleteQty=()=>
//    {
//      this.setState({
//           qty:0
//      });
//    }
    
/////////////////////////////////// it is used to return the html tags to the app.js
// functional component we can use this whenever we do not need of the state okk otherwise use class component
  function CartItem(props){
        const {image,id,title,price,qty}=props.product // this is called destructuring of probs probs is nothing but it is like parameter function ke parameter jaise
        const {product,increaseItem,decreaseItem,deleteItem}=props
        return (
            <div className="cart-item">

                <div className="left-cart" style={styles.image}>
                    <img src={image}/>
                </div>
                <div className="right-cart">
                    <div className="Cart-details">
                             <div>Product::{title}</div>             { /*ye wala constrcutor se */}
                            <div>Price::{price}</div>                      {/* ye wala render ke under jo hai waha se */}
                            <div>Quantity::{qty}</div>
                    </div>
                    <div className="action-icons">
                    <button onClick={()=>increaseItem(product)}><img alt="increase" className="increaseItem" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/plus-2694199-2236197.png?f=avif&w=128"/></button>
                     <button onClick={()=>decreaseItem(product)}><img alt="decrease" className="decreaseItem" src="https://cdn-icons-png.flaticon.com/512/561/561179.png"/></button>
                     <button onClick={()=>deleteItem(id)}><img alt="delete" className="deleteItem" src="https://cdn.iconscout.com/icon/free/png-256/delete-2902143-2411575.png?f=avif&w=128"/></button>
                    </div>
                </div>
            </div>
        );
    }

const styles={
    image:{
        width:'200px',
        height:'200px',
        borderRadius:'5px',
        background:'red'
    }
}
export default CartItem