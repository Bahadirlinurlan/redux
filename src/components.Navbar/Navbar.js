
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
<div className='nav1'>
    </div>
    <div className='nav2'>CustomerFAVS NEXT</div>
    <Toolbar>
    <Button color="inherit"><Link className={styles.link} to='/'>Home</Link></Button>
              <Button color="inherit"><Link className={styles.link} to='/customers'>Customers</Link></Button>
              <Button color="inherit"><Link className={styles.link} to='/customers/add'>Favorites</Link></Button>
            </Toolbar>


    </div>
  )
}

export default Navbar



