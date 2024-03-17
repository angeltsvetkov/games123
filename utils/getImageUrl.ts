export function getImageUrl(imageObj) {
  return "https:" + imageObj?.fields?.file?.url;
}

export function getImageTitle(imageObj) {
  return imageObj?.fields?.file?.title;
}
