import React from 'react'
import  './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import {Avatar, IconButton} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
function Header() {
    return (
        <div className ="header">
            <div className= 'header__left'>
                <IconButton>                
                    <MenuIcon />
                </IconButton>
                <img
                    src = "https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
                    alt =''
                />
            </div>

            <div className= 'header__middle'>
                <SearchIcon />
                <input palceholder='Search mail' type='text'/>
                <ArrowDropDownIcon /> 
            </div>
                <IconButton>                
                    <AppsIcon />
                </IconButton>
                <IconButton>                
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            <div className= 'header__right'>

            </div>
        </div>
    )
}

export default Header
