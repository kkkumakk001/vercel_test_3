import React from "react";

const BlogPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos", {
        cache: "no-store",
    });
    const users = await res.json();

    return (
        <>
            <h3>Blog Page(SSR)</h3>
            <br />
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        {user.id}: {user.title}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default BlogPage;
