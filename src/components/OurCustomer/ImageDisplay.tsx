type ImageDisplaytype = {
  images: string[];
  title: string;
};

function ImageDisplay({ images, title }: ImageDisplaytype) {
  return (
    <div>
      <h1 className="font-bold mb-10 text-2xl ">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, i) => (
          <div
            key={i}
            className="bg-slate-50 dark:bg-slate-700 flex justify-center items-center p-4 h-32 rounded-sm shadow-sm"
          >
            <img src={image} alt={`Image ${i}`} className="max-h-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDisplay;
