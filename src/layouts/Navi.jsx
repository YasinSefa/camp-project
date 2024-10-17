import React from 'react'
import {
    MenuMenu,
    MenuItem,
    Button,
    Menu,
    Container,
} from 'semantic-ui-react'
import CartSummary from './CartSummary'

function Navi() {
    return (
        <div>
            <Menu inverted fixed='top'>
                <Container>
                    <MenuItem
                        name='home'
                    />
                    <MenuItem
                        name='messages'
                    />

                    <MenuMenu position='right'>
                        <CartSummary>

                        </CartSummary>

                        <MenuItem>
                            <Button primary>Sign Up</Button>
                        </MenuItem>
                    </MenuMenu>
                </Container>
            </Menu>
        </div>
    )
}

export default Navi