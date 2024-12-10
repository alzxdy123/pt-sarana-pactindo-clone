interface SlideImage {
  src: any;
  alt: any;
  width: any;
}

interface SlideContentProps {
  title: string;
  description: string;
  images?: SlideImage[]; // Perbarui tipe di sini
}

const SlideContent: React.FC<SlideContentProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center xl:flex-row xl:items-center gap-8 text-white">
      <div className="flex flex-col text-center xl:text-left">
        <h1 className="text-3xl xl:text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg xl:text-xl">{description}</p>
      </div>
      <div className="flex gap-4">
        {images?.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            width={image.width}
            className="hidden xl:block"
          />
        ))}
      </div>
    </div>
  );
};

export default SlideContent;
