import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '5aijr8b2',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (!source) return '';
  try {
    return builder.image(source);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error building image URL:', error);
    return '';
  }
};
