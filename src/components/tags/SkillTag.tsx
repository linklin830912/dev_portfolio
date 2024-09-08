export type SkillTagProps = {
    text: string,
    level: number,
    isMini?: boolean
}
function SkillTag(props: SkillTagProps) {     
    return <>
        {props.level === 1 && <h3 className={`h-fit w-fit text-${props.isMini ? "h7 py-[1px] px-2":"h5 py-1 px-3 font-bold"} rounded-[100px] text-menu-blue mr-1 mb-1 bg-basic`}
            >{props.text}</h3>
        }
        { props.level===2 && <h3 className= {`h-fit w-fit text-${props.isMini ? "h7 py-[1px] px-2":"h5 py-1 px-3 font-bold"} rounded-[100px] text-menu-blue mr-1 mb-1 bg-middle`}
            >{props.text}</h3>
        }
        { props.level===3 && <h3 className={`h-fit w-fit text-${props.isMini ? "h7 py-[1px] px-2":"h5 py-1 px-3 font-bold"}  rounded-[100px] text-menu-blue mr-1 mb-1 bg-advanced`}
            >{props.text}</h3>
        }
    </>
}
export default SkillTag;