import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://www.google.com/search?sca_esv=6298c17d4a9e2aad&sxsrf=ADLYWIKCSpBF-Xx20NA89aaok1_3GcviOQ:1729360269709&q=yasin+sefa+aksoy&udm=2&fbs=AEQNm0CgMcZ11KbHg1uunEmuo39LYaLxf_n_v5Qu9vkTINnKPNxSSRV--bGiJa6CXOAP_uiHPbLwpiGDt9Ut9ZZcy-dTHFk6cnaRTJM3Wx51r69OfcuD5JLJunI2sGWHNlMdquXa_lJYNL1wU0MtbL8B-DNjQQH-rrKWdkcOC8wm70NkUPqJ1PSsnSauKdt37r9GHdDleXib7q6BqviEwbJxSpEzj_KRSQ&sa=X&ved=2ahUKEwiw7MGEgZuJAxWWR_EDHSe-NYIQtKgLegQIGxAB&biw=1920&bih=951&dpr=1#vhid=03d4YlxsBqPw2M&vssid=mosaic" />
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
