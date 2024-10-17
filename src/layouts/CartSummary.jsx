import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu } from 'semantic-ui-react'

function CartSummary() {
    return (
        <div>
            <Dropdown item text='Language'>
                <DropdownMenu>
                    <DropdownItem>English</DropdownItem>
                    <DropdownItem>Russian</DropdownItem>
                    <DropdownItem>Spanish</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default CartSummary