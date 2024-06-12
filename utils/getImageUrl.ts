export function getImageUrl(imageObj:any) {
  if(imageObj){
    return "https:" + imageObj?.fields?.file?.url;
  }
}

export function getImageTitle(imageObj:any) {
  return imageObj?.fields?.file?.title;
}
