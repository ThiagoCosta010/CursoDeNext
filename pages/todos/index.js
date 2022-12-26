import styles from '../../styles/Todos.module.css'
import Link from 'next/link'
export async function getStaticProps(){
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    const todos = await data.json()

    // console.log(todos)
    return {
        props: {todos},
    }
}
export default function todos({todos}){
    return(
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todoList}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title} - <Link href={`/todos/${todo.id}`}>ver mais</Link></li>
                ))}

            </ul>
        </>
    )
}
