"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {

    const { data: sessions, isPending } = authClient.useSession()
    console.log(sessions)
    const user = sessions?.user;
    console.log(user)

    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">pixgen.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-photos"}>All Photos</Link>
                    </li>
                    <li>
                        <Link href={"/pricing"}>Pricing</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                {user ? <div className='flex gap-2 justify-center items-center'>
                    <div>
                        <h1>{`Hello! ${user.name} `}</h1>
                        <Link href={'/'}>
                            <Button onClick={() => authClient.signOut()} variant='outline'>Log Out</Button>
                        </Link>
                    </div>
                    <Image
                        src='/hero.jpg'
                        alt={user.name}
                        width={40}
                        height={50}
                        className="rounded-full"
                    />
                </div> :
                    <div className="flex gap-4">
                        <ul className="flex items-center gap-3  text-sm">
                            <li>
                                <Link href={"/signup"}>SignUp</Link>
                            </li>
                            <li>
                                <Link href={"/signin"}>SignIn</Link>
                            </li>
                        </ul>
                    </div>}

            </nav>
        </div>
    );
};

export default Navbar;