export default function () {
  const { cdnUrl } = useAppConfig();

  const image = (imageName: string) => {
    return cdnUrl + imageName;
  };

  return {
    image,
  };
}
