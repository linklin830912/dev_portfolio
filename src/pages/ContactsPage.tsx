
import React, { useState } from "react";
import { fs } from "../firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";
import { useTranslation } from "react-i18next";

function ContactsPage() { 
    const { t } = useTranslation(["contact"]);
    const wordLimit = 200;
    const [fullname, setFullName] = useState<string>("");
    const [contactEmail, setContactEmail] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [wordCount, setWordCount] = useState<number>(0);
    const [statusMessage, setStatusMessage] = useState<string>("");
    const handleClick = async() => {
        try {
            if (fullname !== "" && contactEmail !== "" && content !== "") {
                await addDoc(collection(fs, "emails"), {
                    name: fullname,
                    content: content,
                    contactEmail: contactEmail,
                    time: serverTimestamp()
                });
                setStatusMessage("Thank you.")
            } else { 
                setStatusMessage("Incomplete message.")
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    return (
        <div className="h-[100vh] flex-col lg:flex-row flex justify-center items-center relative">
            
            <div className="mr-3 w-[95%] md:w-[80%] lg:w-[50%] text-basic text-h5">                
                <textarea onChange={e => {
                    const wordsArray = e.target.value.trim().split(/\s+/);
                    if (wordsArray.length < wordLimit) { 
                        setWordCount(wordsArray.length);
                        setContent(e.target.value);
                    }
                }}
                    placeholder={t("message")}
                    className="w-[100%] z-10 h-[250px] p-3 text-menu-font rounded-[10px] bg-menu-blue  stroke-menu-font stroke-1" />
                <h6 className="text-menu-font z-10 text-h6 relative text-right pr-5 top-[-28px]"> { `${wordCount}/${wordLimit}`}</h6>
            </div>
            <div className="flex flex-col w-[95%] md:w-[80%] lg:w-[50%] text-basic text-h5">
                <input type="text" placeholder={t("contact-name")} onChange={e => {
                    setFullName(e.target.value);
                }}
                    className=" z-10 text-menu-font rounded-[100px] mb-2 px-3 py-2 bg-menu-blue stroke-menu-font stroke-1" />
                <input type="email" placeholder="@email.com" onChange={e => {
                    setContactEmail(e.target.value);
                }}
                    className=" z-10 text-menu-font rounded-[100px] mb-2 px-3 py-2 bg-menu-blue  stroke-menu-font stroke-1" />
                <button className="z-10 px-10 py-2 bg-content-font hover:bg-advanced text-menu-blue font-bold rounded-[100px] text-h4 whitespace-nowrap"
                    onClick={handleClick} >{t("send-message")}</button>
                <h6 className="text-menu-font z-10 text-h6">{statusMessage}</h6>
                <div className="flex flex-row mt-5 justify-end">
                    <GithubIcon />
                    <LinkedinIcon/>
                </div>
            </div>
            
        </div>
    );
}

export default ContactsPage;