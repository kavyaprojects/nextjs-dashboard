import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function contentfulContent(contenttype) {
    try {
      const response = await client.getEntries({
        content_type: contenttype,
      });
      return response.items;
      
    } catch (error) {
      console.error('Error fetching entries from Contentful:', error);
    }
}
