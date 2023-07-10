import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import style from './App.module.css'
import './global.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content : String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LucasCurty.png',
      name: 'Lucas Curty',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!🤚' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocket Seat. O nome do projeto é DoctorCare🚀',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-03 20:00:00'),
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post,index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
