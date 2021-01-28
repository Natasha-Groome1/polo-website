import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

function NavigationBar() {

    return (
      <Menu pointing secondary>
             <Menu.Item icon="home" name='test' href="/Home"/>
            <Menu.Item icon="about" name='about' href="/About"/>
            <Menu.Item icon="polo lessons" name='polo lessons' href="/PoloLessons"/>
            <Menu.Item icon="experience days" name='experience days' href="/ExperienceDays"/>
            <Menu.Item icon="polo livery" name='polo livery' href="/PoloLivery"/>
            <Menu.Item icon="sponsorship" name='sponsorship' href="/Sponsorship"/>
            <Menu.Item icon="merchandise" name='merchandise' href="/Merchandise"/>
            <Menu.Item icon="chukkas" name='chukkas' href="/Chukkas"/>
            <Menu.Item icon="address book" name='contact' href="/Contact"/>
            <Menu.Item icon="book now" name='book now' href="/BookNow"/> 

        </Menu>
        
    )
}
export default NavigationBar;

// How do I get Contact and Book Now on the same line as the logo?
// How do I go to another page for each section?
