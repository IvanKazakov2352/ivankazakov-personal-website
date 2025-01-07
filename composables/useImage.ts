import type { IUseImage } from "~/types/types";

export default function (): IUseImage {
  const { cdnUrl } = useAppConfig();

  const image = (imageName: string): string => {
    return cdnUrl + imageName;
  };

  return {
    image,
  };
}
