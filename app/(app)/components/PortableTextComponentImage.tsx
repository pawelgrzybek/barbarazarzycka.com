import { client } from "@/sanity/utils";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

const PortableTextComponentImage = ({ value }: any) => {
  const { width, height } = getImageDimensions(value);

  if (value.caption) {
    return (
      <figure>
        <Image
          src={urlBuilder(client).image(value).url()}
          alt={value.alt || " "}
          width={width}
          height={height}
        />
        <figcaption>{value.caption}</figcaption>
      </figure>
    );
  }

  return (
    <Image
      src={urlBuilder(client).image(value).url()}
      alt={value.alt || " "}
      width={width}
      height={height}
    />
  );
};

export default PortableTextComponentImage;
