export function getImageUrl(imageObj:any) {
  return "https:" + imageObj?.fields?.file?.url;
}

export function getImageTitle(imageObj:any) {
  return imageObj?.fields?.file?.title;
}
