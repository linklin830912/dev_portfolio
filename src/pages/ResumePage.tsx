
import styles from "../components/buttons/styles/FloatButton.module.css";
import DownloadIcon from "../components/icons/DownloadIcon";

function ResumePage() {    
    
    return (
        <div id="resume" className="h-[100vh] flex-row flex justify-center items-center">
            <a className={`w-[100%] max-w-[350px] ${styles.floatA} px-10 py-3 bg-content-font hover:bg-menu-font-hover text-menu-blue font-bold rounded-[100px] text-h3 whitespace-nowrap relative`}
                href="https://drive.google.com/uc?export=download&id=1w4ekJ5cT9X578-BtMKZgd9ZBMoNKXqo7">                
                <div className="flex flex-row justify-center items-center"><h2 className="mr-3">Download Resume</h2> <DownloadIcon/></div>            
            </a> 
        </div>
    );
 }
export default ResumePage;