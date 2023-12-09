export default async function ImageLoader(url) { 
    try {
        const { default: image} = await import(url);
        return image;
    } catch (error) {
        console.error(error);
    }
}
