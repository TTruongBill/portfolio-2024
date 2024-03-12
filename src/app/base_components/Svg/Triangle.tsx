export default function Triangle({...props}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" {...props}>
            <path d="M3 3 L3 25 L23 14 z" fill="white"/>
        </svg>
    );
}