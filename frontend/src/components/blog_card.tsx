export const BlogCard = ()=>{
    return (
        <div className="p-5 w-fit flex flex-col ">
            <div className="flex items-center my-2">
                <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
                    <span className="font-medium dark:text-gray-300">JK</span>
                </div>
                <span className="px-2 font-semibold text-xl">Lokesh M.</span>
                <span className="text-slate-400 font-semibold">April 9, 2024</span>
            </div>
            <div className="my-2 text-3xl font-bold">
                How an Ugly Single-Page Website Makes 5,000 a Month with Affiliate Marketing
            </div>
            <div className="my-2 text-xl ">
                No need to create a fancy and modern website with hundreds of pages to make money online. — Making money online is the dream for man...
            </div>
            <div
    className="mt-5 w-fit relative grid select-none items-center whitespace-nowrap rounded-full bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900">
    <span className="">Article</span>
  </div>
        </div>
    )
}