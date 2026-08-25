import PhotoCard from "./PhotoCard";

const TopPhotos = async () => {
    const res = await fetch("https://pixon-coral.vercel.app/data.json")
    const photos = await res.json();
    const topPhotos = photos.slice(0, 8)

    return (
        <div>
            <h1 className="font-bold text-2xl my-3">Top Categories Photos</h1>
            <div className="grid grid-cols-4 gap-4">
                {
                    topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>

        </div>
    );
};

export default TopPhotos;