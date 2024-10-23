import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://x.com/yasin_sf_ax/photo" />
                <Dropdown pointing="top left" text='Sefa'>
                    <DropdownMenu>
                        <DropdownItem text="Bilgilerim" icon="info" />
                        <DropdownItem onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}
