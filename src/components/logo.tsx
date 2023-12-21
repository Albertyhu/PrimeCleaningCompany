import Logo from "@/assets/PrimeCleaningCo.png"

const LogoDiv = (props) =>{
    const {
        customDiv, 
        customImg, 
    } = props; 
    return(
        <div
            className = {customDiv ? customDiv : "h-full w-[300px]"}
        >
            <img 
            src = {Logo.src}
            alt="logo"
            className = {customImg ? customImg : "w-full h-full object-cover"}
            />
        </div>
    )
}

export default LogoDiv; 