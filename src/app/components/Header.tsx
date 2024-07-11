import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header>
            <ul className="flex wrap justify-center">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
