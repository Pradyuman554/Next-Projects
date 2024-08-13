type Post = {
    id:number,
    title:string,
    author:string
}

export default async function Products() {
    const response = await fetch("http://localhost:3001/posts");
    const posts = await response.json();
    return (
        <ul>
            {
                posts.map((post: Post)=>{
                    return <li key={post.id} className="border-[5px] border-red-300 m-5 bg-red-500 text-white font-black text-3xl text-center p-5">
                        <h1>
                            {post.title}
                        </h1>
                        <br/>
                        <h2>
                            {post.author}
                        </h2>
                    </li>
                })
            }
        </ul>
    );
}