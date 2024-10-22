import React, { useState } from 'react'
import {
    MenuMenu,
    MenuItem,
    Menu,
    Container,
} from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useNavigate } from 'react-router-dom';



function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const navigate = useNavigate()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
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
                        <CartSummary />
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </MenuMenu>
                </Container>
            </Menu>
        </div>
    )
}

export default Navi