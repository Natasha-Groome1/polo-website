import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownOption = () => (
  <Menu vertical>
    <Menu.Item>Chukkas 2021</Menu.Item>
    <Dropdown text='Month' pointing='left' className='link item' >
      <Dropdown.Menu>
        <Dropdown.Item href='/month/January' >January</Dropdown.Item>
        <Dropdown.Item href='/month/February' >February</Dropdown.Item>
        <Dropdown.Item href='/month/March' >March</Dropdown.Item>
        <Dropdown.Item href='/month/April' >April</Dropdown.Item>
        <Dropdown.Item href='/month/May' >May</Dropdown.Item>
        <Dropdown.Item href='/month/June' >June</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item>Past Chukkas: 2020</Menu.Item>
    <Menu.Item>Past Chukkas: 2019</Menu.Item>
  </Menu>

)

export default DropdownOption;

// How can I get January page to show

