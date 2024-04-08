import { Appbar } from "../components/appbar"

export const Blog = ()=>{
    return (
        <div className="bg-white">
            <Appbar></Appbar>
            <div className="flex my-3 mx-10">
                <Content></Content>
                <div className="my-5 mx-8">
                <AuthorCard></AuthorCard>
                </div>
            </div>
        </div>
    )
}

const Content = ()=>{
    return (
        <div className="flex flex-col max-w-5xl ">
        <div className="text-5xl font-extrabold my-2">
            Taxing Laughter: The Joke Tax Chronicles
        </div>

        <div className="my-2 text-slate-400 font-semibold">
            Posted on August 4,2023
        </div>

        <div className="my-3">
        Once upon a time, in a far-off landi there was a very lazy king who spent all day lounging on his throne. One day, his
advisors came to him with a problem: the kingdom was running out of money.
Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's
pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to Stop Jokester.
And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they
couldn't help but laugh. And once they started laughing, they couldn't stop.
        </div>
    </div>
    )
}
const AuthorCard = ()=>{
    return (
        <div className="flex flex-col">
                        <div>Author</div>
                        <div className="grid grid-cols-8 items-center">
                            
                        <div className=" relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gray-600">
                            <span className="font-medium dark:text-gray-300">JK</span>
                        </div>

                        <div className="flex flex-col col-span-7">
                                <div className="font-bold text-2xl">Jokester</div>
                                <div className="text-slate-600 ">Master ot mirth, purveyor ot puns, and the funniest person in the kingdom</div>
                            </div>
                        </div>
                </div>
    )
}