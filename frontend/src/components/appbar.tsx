import { Link, useNavigate } from "react-router-dom";

export const Appbar= ()=>{
    const navigate = useNavigate();
    const name = "Lokesh Mishra"
    const initial = name.split(" ").map((n)=>n[0]).join("");
    return (  
        <div className="w-full h-20 bg-slate-100 mb-10 flex justify-between items-center px-5">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="70" viewBox="0 0 50 50">
                
                <path d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"></path>
            </svg>
            <div>
            <button type="button" onClick={()=>{navigate("/blog/create")}} 
            className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Create</button>
            
            <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
                            <span className="font-medium dark:text-gray-300">{initial}</span>
            </div>
            </div>
            
            
        </div>
    )
}