import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider, DropdownItem, DropdownMenu } from 'semantic-ui-react'

function CartSummary() {
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <DropdownMenu>
                    <DropdownItem>English</DropdownItem>
                    <DropdownItem>Russian</DropdownItem>
                    <DropdownItem>Spanish</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem as={NavLink} to="/cart">Sepete git</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default CartSummary