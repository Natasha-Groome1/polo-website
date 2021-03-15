import React from 'react';
import { Menu } from 'semantic-ui-react'

function NavigationBar() {

    return (
      <Menu pointing secondary>
             <Menu.Item icon="home" name='home' href="/Home"/>
            <Menu.Item icon="user" name='about' href="/About"/>
            <Menu.Item icon="calendar alternate" name='polo lessons' href="/PoloLessons"/>
            <Menu.Item icon="calendar" name='experience days' href="/ExperienceDays"/>
            <Menu.Item icon="point" name='polo livery' href="/PoloLivery"/>
            <Menu.Item icon="handshake" name='sponsorship' href="/Sponsorship"/>
            <Menu.Item icon="shopping basket" name='merchandise' href="/Merchandise"/>
            <Menu.Item icon="trophy" name='chukkas' href="/Chukkas"/>
            <Menu.Item icon="address book" name='contact' href="/Contact"/>
            <Menu.Item icon="book" name='book now' href="/BookNow"/> 

        </Menu>
        
    )
}
export default NavigationBar;



