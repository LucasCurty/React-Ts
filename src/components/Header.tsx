import style from './Header.module.css'

import Atomic from '../assets/Atomic.svg'

export function Header(){
    return (
        <header className={style.header}>
                <img className='logo' src={Atomic} alt="Logo tipo Ignite" />
                <strong>
                    React Basico
                </strong>
        </header>
    )
}