import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import { FcLike } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";


const PhotoCard = ({ photo }) => {
    return (
        <Card className="border rounded-xl">
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



        </Card >
    );
};

export default PhotoCard;