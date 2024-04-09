interface FullBlogViewProps{
    title: string;
    dateCreated?: string;
    author: string;
    authorDescp?: string;
    content: string;
}

export const FullBlogView= ({title, dateCreated = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }), author, authorDescp = "Master ot mirth, purveyor ot puns, and the funniest person in the kingdom", content} : FullBlogViewProps)=>{
    
    return (
        <div className="flex my-3 mx-10">
                <div className="w-[90%]">
                    <Content content={content} dateCreated={dateCreated} title={title}></Content>
                </div>
                <div className="my-5 mx-8 ">
                    <AuthorCard author={author} authorDescp={authorDescp}></AuthorCard>
                </div>
            </div>
    )
}


interface contentProps{
    title: string,
    dateCreated: string,
    content:string,
}

const Content = ({title, content, dateCreated}:contentProps )=>{
    return (
        <div className="flex flex-col max-w-5xl ">
            <div className="text-5xl font-extrabold my-2">
                {title}
            </div>

            <div className="my-2 text-slate-400 font-semibold">
                {"Posted on : " + dateCreated}
            </div>

            <div className="my-3 text-justify">
                {content}
            </div>
        </div>
    )
}

interface authorCardProps{
    author: string; 
    authorDescp: string;
}

const AuthorCard = ({author, authorDescp}: authorCardProps)=>{
    
    const initial = author.split(" ").map((n)=>n[0]).join("");

    return (
        <div className="flex flex-col">
                        <div>Author</div>
                        <div className="grid grid-cols-8 items-center">
                            
                        <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
                            <span className="font-medium dark:text-gray-300">{initial}</span>
                        </div>

                        <div className="flex flex-col col-span-7">
                                <div className="font-bold text-2xl">{author}</div>
                                <div className="text-slate-600 ">{authorDescp}</div>
                            </div>
                        </div>
                </div>
    )
}