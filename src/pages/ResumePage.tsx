import React, { useState } from "react";
import { fs } from "../firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "../components/buttons/FloatButton.module.css";



function ResumePage() {
    const wordLimit = 200;
    const [fullname, setFullName] = useState<string>("");
    const [contactEmail, setContactEmail] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [wordCount, setWordCount] = useState<number>(0);
    const handleClick = async() => {

        try {
            if (fullname !== "" && contactEmail !== "" && content !== "") { 
                const docRef = await addDoc(collection(fs, "emails"), {
                name: fullname,
                content: content,
                contactEmail: contactEmail,
                time: serverTimestamp()
                });
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    
    return (
        <div className="h-[100vh] flex-row flex justify-center items-center">
            <a className={`${styles.floatA} px-10 py-3 bg-content-font hover:bg-menu-font-hover text-menu-blue font-bold rounded-[100px] text-h3 whitespace-nowrap relative`}
                href="https://drive.google.com/uc?export=download&id=1w4ekJ5cT9X578-BtMKZgd9ZBMoNKXqo7">Download Resume</a>
            <div className="p-8 relative">
                <input type="text" placeholder="Contact Name" onChange={e => {
                    setFullName(e.target.value);
                }}
                    className="w-[100%] text-menu-font rounded-[100px] mb-2 px-3 py-2 bg-content-sub-font stroke-menu-font stroke-1" />
                <input type="email" placeholder="@email.com" onChange={e => {
                    setContactEmail(e.target.value);
                }}
                    className="w-[100%] text-menu-font rounded-[100px] mb-2 px-3 py-2 bg-content-sub-font  stroke-menu-font stroke-1" />
                <textarea onChange={e => {
                    const wordsArray = e.target.value.trim().split(/\s+/);
                    if (wordsArray.length < wordLimit) { 
                        setWordCount(wordsArray.length);
                        setContent(e.target.value);
                    }
                }}
                    placeholder="Message"
                    className="w-[100%] h-[150px] p-3 text-menu-font rounded-[10px] bg-content-sub-font  stroke-menu-font stroke-1" />
                <h6 className="text-menu-font text-h6 relative text-right pr-5 top-[-28px]"> { `${wordCount}/${wordLimit}`}</h6>
                <button className="w-[100%] px-10 py-2 bg-content-font hover:bg-menu-font-hover text-menu-blue font-bold rounded-[100px] text-h4 whitespace-nowrap"
                    onClick={handleClick} >Send Message</button>

            </div>

        </div>
    );
 }
export default ResumePage;