import Image from 'next/image';

interface ImagemResponsivaProps {
    image: any;
    className?: string;
}

export default function ImagemResponsiva({
    image,
    className,
}: ImagemResponsivaProps) {
    return (
        <Image
            src={image}
            alt="Imagem"
            className={`
            w-[100%] h-[120px]
            sm:w-[200px] sm:h-[330px]
            md:w-[350px] md:h-[365px]
            lg:w-[550px] lg:h-[365px]
            rounded-xl object-cover
            ${className ?? ''}
    `}
        />
    );
}
