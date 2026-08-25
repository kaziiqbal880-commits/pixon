import { Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://pixon-coral.vercel.app/data.json")
    const photos = await res.json();
    const photo = photos.find(phot => phot.id == id)


    return (
        <div className="my-3">
            <Card className="border rounded-xl">
                <div className="relative w-full aspect-square">
                    <Image className="rounded-xl object-cover"

                        alt={photo.title}
                        fill
                        src={photo.imageUrl}
                    />
                    <Chip className="relative top-2 left-2">{photo.category}</Chip>
                </div>

                <div className="space-y-3">
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
                    <p className="font-semibold">{photo.prompt}</p>
                    <div>
                        <ul className="list-none flex flex-wrap gap-2">
                            {photo.tags.map((tag, ind) => (
                                <li className="font-semibold" key={ind}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </Card >


        </div>
    );
};

export default DetailsPage;