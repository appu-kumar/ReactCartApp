

function NavBar(props)
{
  return(

  <div className='nav'>
    <img className='cart-icon' src='https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg'/>
    <span> {props.countProducts} </span>

  </div>

  )


}

export default NavBar;