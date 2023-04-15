import React from 'react'
import style from "./content2.module.css"
const Content2 = () => {
    return (
        <div>
            <div className={style.container} >
                <div className={style.first}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPDk7KvL3HuV_gF7tQyVM-G3SyNO0OPoGqMWw1UHOGxKMycDyaJ14rbsmZ4L9iGX9BzE&usqp=CAU' />
                    <div className={style.paragrafs}>
                        <p>INSIDE H&M</p>
                        <h3><b>Smiley World x H&M</b></h3>
                        <span>Read the Story</span>
                    </div>
                </div>

                <div className={style.second}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5UyzKDrdABNaMUrwbf244DNII08Z_tiKYQ&usqp=CAU" />
                    <div className={style.paragrafs}>
                        <p>INSIDE H&M</p>
                        <h3><b>Smiley World x H&M</b></h3>
                        <span>Read the Story</span>
                    </div>

                </div>


                <div className={style.third}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUtMqgJ-8Ao95eifdyyeG2q4j2senJfGzmw&usqp=CAU" />
                    <div className={style.paragrafs}>
                        <p>INSIDE H&M</p>
                        <h3><b>Smiley World x H&M</b></h3>
                        <span>Read the Story</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content2
