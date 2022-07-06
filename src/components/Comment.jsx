import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

import { Avatar } from './Avatar'

export function Comment({content, onDeleteComment}) {

    function handleDeleteComment() {        
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar 
            src="https://github.com/diego3g.png"
            hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time
                                title='11 de Maio às 08:13'
                                dateTime='2022-05-11 05:13:00'
                            >Cerca de 1h atras</time>
                        </div>
                        <button 
                        onClick ={handleDeleteComment}
                        title='Deletar comentário'>
                            <Trash
                            size={24}/>
                        </button>
                        
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir<span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}