import '../styles/navbar.css';
import {Avatar, IconButton} from '@material-ui/core';

const NavBar = () => {
    return ( 
        <>
        <div className = "navbar">
            <div className = "logo">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="dp"/>
                <p>Keep</p>
                
            </div>
            <div className="logout__button">
                <button>
                    logout   
                </button>
                <Avatar
                    src="https://lh3.googleusercontent.com/ogw/ADea4I7-E37V13Vp4H4xbInrP7LnLCqHK_Yby6ytl-B9rQ=s32-c-mo" 
                />
            </div>
        </div>
        <hr/>
        </>
     );
}
 
export default NavBar;