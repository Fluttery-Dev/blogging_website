import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blog_card"
import { BlogSkeleton } from "../components/blog_skeleton";
import { useBlogs } from "../hooks";

export const ViewBlogs = ()=>{
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return (
        <div className="flex flex-col items-center">
            <Appbar ></Appbar>
            <div className="flex flex-col w-2/3">
                {
                    blogs.map((e)=><BlogCard id={e.id} author="Lokesh Mishra" content={e.content} title={e.title}></BlogCard>)
                } 
            </div>
        </div>
    )
}