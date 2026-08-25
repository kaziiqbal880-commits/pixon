import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";


const AllPhotos = async () => {
    const res = await fetch("https://pixon-coral.vercel.app/data.json")
    const photos = await res.json();
    console.log(photos)
    return (
        <div className="">
            <h1 className="font-bold text-2xl my-3">All Photos</h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    photos.map(photo => (<Card key={photo.id}
                        className="border rounded-xl">
                        <div className="relative w-full aspect-square">
                            <Image className="rounded-xl object-cover"

                                alt={photo.title}
                                fill
                                src={photo.imageUrl}
                            />
                            <Chip className="relative top-2 left-2">{photo.category}</Chip>
                        </div>

                        <div>
                            <h1 className="font-semibold">{photo.title}</h1>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex gap-2 justify-center items-center">
                                <FcLike />
                                {photo.likes}
                            </div>
                            <Separator orientation="vertical" />
                            <div className="flex  gap-2 justify-center items-center">
                                <FiDownload />
                                {photo.downloads}
                            </div>
                        </div>

                        <div>
                            <Button className="w-full" variant="outline" >View</Button>
                        </div>



                    </Card >))
                }
            </div>

        </div>
    );
};

export default AllPhotos;