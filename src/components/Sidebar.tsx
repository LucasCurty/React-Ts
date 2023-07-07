import {PencilLine} from '@phosphor-icons/react'

import style from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img 
                className={style.cover}
                src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50' 
                alt="" 
            />
            <div className={style.profile}> 
                <Avatar 
                    src="https://github.com/LucasCurty.png"
                />

                <strong>Lucas Curty</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                   <PencilLine size={20} /> 
                   Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}