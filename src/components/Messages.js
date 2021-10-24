import React, {useContext, useState} from 'react'
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import s from './Messages.module.css'
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat";

const Messages = (props) => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value,setValue] = useState()
    const [messages,loading] = useCollectionData( firestore.collection('messages').orderBy('createdAt'))
    const sendMessage = () => {
        if (value){
        firestore.collection('messages').add({
            uid : user.uid,
            displayName : user.displayName,
            photoURL : user.photoURL,
            text : value,
            createdAt : firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
        }
    }
    if (loading) {
        <Loader />
    }
    return (
        <section className={s.section__messages}>
            <div className='container'>
                <div className={s.messages__area}>
                    { messages && messages.map( message =>
                        <div style={{
                            margin : '10px',
                            color : user.uid == message.uid ? 'blue' : 'red',
                            // marginLeft : user.uid == message.uid ? 'auto' : '10px',
                            marginLeft : '15px',
                            width : 'fit-content'
                        }}>
                            <div className={s.photo__userName}>
                                <img src={message.photoURL} alt=""/>
                                <div>{message.displayName}</div>
                            </div>
                            <div className={s.message__text}>{message.text}</div>
                        </div>
                    )}
                </div>
                <div className={s.area__buttons}>
                    <div className={s.submit__area}>
                    <textarea name="" id="" cols="50" rows="5" placeholder='Your message here...' value={value} onChange={(e) => setValue(e.target.value)}></textarea>
                    <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Messages;