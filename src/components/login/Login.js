import React, { useContext, useState } from 'react'
import FirebaseContext from '../../context/FirebaseContext'
import styles from './login.module.css'
import { FacebookFilled, GithubOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Toaster } from 'react-hot-toast';
const Login = () => {

  const { signIn, user, loginMessage } = useContext(FirebaseContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const login = () => {

    signIn(email, password).then(() => {
      console.log("done");
    }).catch((e) => {
      console.log("error", e);
    })
    console.log(user);
  }
  return (
    <>
      {!user ?
        <div className={styles.register_container}>

          <h1>Welcome</h1>
          <div className={styles.inputs}>
            <label>Email</label>
            <input
              type="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} />
            {loginMessage && <p style={{ color: "red", backgroundColor: "black" }}>{loginMessage}</p>}
            <label>Password</label>
            <input type="password"
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className={styles.inputs_paragraf}>
            <p >Forgot Password ?</p>

          </div>

          <button className={styles.register_button} onClick={login}>LOGIN</button>
          <p>or</p>



          {/*FACEBOOK GOOGLE VB GİRİS BUTONLARI */}
          <div className={styles.social_login_container}>
            <p>Register Using social networks</p>
            <div className={styles.social_login_buttons}>
              <button><FacebookFilled /></button>
              <button><GithubOutlined /> </button>
              <button><GooglePlusOutlined /> </button>
            </div>
          </div>
        </div>
        :
        <div className={styles.register_container}>
          <h3 style={{ color: "white" }}>PLEASE QUIT  TO LOG IN WITH ANOTHER ACCOUNT</h3>
          <Toaster position='top-center' />
        </div>}
    </>
  )
}

export default Login
