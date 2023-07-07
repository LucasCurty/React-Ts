import style from './Header.module.css'

import IgniteLogo from '../assets/logo-ignite.svg'

export function Header(){
    return (
        <header className={style.header}>
                <img src={IgniteLogo} alt="Logo tipo Ignite" />
                <strong>ICONE</strong>
        </header>
    )
}