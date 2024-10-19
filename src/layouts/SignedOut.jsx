import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <MenuItem>
                <Button primary onClick={props.signIn}>Giriş yap</Button>
                <Button primary style={{ marginLeft: "0.5em" }}>Kayıt ol</Button>
            </MenuItem>
        </div>
    )
}
