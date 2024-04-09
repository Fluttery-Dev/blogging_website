import { Link } from "react-router-dom";

interface BlogCardProps{
    id: string;
    author: string;
    title: string;
    content: string;
    tags?: string[];
    dateCreated?: string; 
}

export const BlogCard = ({id, author, title, content, tags= ["Article"], dateCreated = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}: BlogCardProps)=>{
    const initial = author.split(" ").map((n)=>n[0]).join("");
    return (
        <div className="p-5 w-fit flex flex-col self-center">
            <Link to={`/blog/${id}`}>
            <div className="flex items-center my-2">
                <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
                    <span className="font-medium dark:text-gray-300">{initial}</span>
                </div>
                <span className="px-2 font-semibold text-xl">{author}</span>
                <span className="text-slate-400 font-semibold">{dateCreated}</span>
            </div>
            <div className="my-2 text-3xl font-bold">
                {title}
            </div>
            <div className="my-2 text-xl text-clip overflow-hidden line-clamp-2">
               {content}
            </div>
            <div className="flex w-fit mt-5">
                <div className="mx-2 w-fit relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
                    <span className="">{tags[0]}</span>
                </div>
                <div className="self-center">{Math.ceil(content.length/400) + " mins read"}</div>
            </div>
            </Link>
        </div>
   
    )
}