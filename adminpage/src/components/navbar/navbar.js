import React, { Component , Fragment } from 'react';
import { connect } from 'react-redux'
import { NavbarBox, NavbarUser, NavbarIcons } from './style'
import MailIcon from '@material-ui/icons/Mail';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

class Navbar extends Component {
    render() { 
        return (
        <Fragment>
            <NavbarBox>
               <NavbarUser>
               <NavbarIcons>  <MailIcon style={{ fontSize: 30 }}/> </NavbarIcons>
               <NavbarIcons>  <PeopleOutlineIcon style={{ fontSize: 30 }}/> </NavbarIcons>
               <NavbarIcons> 天津理工大学/*state？*/  </NavbarIcons>
               </NavbarUser>
            </NavbarBox>
        </Fragment>
    )
     } ;
}

export default Navbar;
