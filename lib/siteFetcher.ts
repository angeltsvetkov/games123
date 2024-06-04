let contentful = require("contentful");
export const dynamic = 'force-dynamic'
export async function getSite() {
  console.log("process.env.SPACE_ID: " + process.env.SPACE_ID);
  
  var client = contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN
  });


  return client.getEntries({
    content_type: "productPage",
    limit: 1,
    include: 10,
    "fields.id": "pmboard.net",
  }).then(function (entry:any) {
    return entry.items[0].fields;
  });
}
