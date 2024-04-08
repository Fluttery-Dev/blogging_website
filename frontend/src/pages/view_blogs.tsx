import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blog_card"

export const ViewBlogs = ()=>{

    return (
        <div className="flex flex-col items-center">
            <Appbar></Appbar>
            <div className="flex flex-col w-2/3">
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>
            </div>
        </div>
    )
}