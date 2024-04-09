import { useParams } from "react-router-dom";
import { Appbar } from "../components/appbar"
import { FullBlogView } from "../components/full_blog_view"
import { Spinner } from "../components/spinner";
import { useBlog } from "../hooks";

export const Blog = ()=>{
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return (
        <div className="bg-white">
            <Appbar></Appbar>
            <FullBlogView author="Lokesh Mishra" content={blog.content} title={blog.title}></FullBlogView>
        </div>
    )
}
