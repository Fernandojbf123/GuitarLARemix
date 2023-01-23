
export async function getProducts() {
    const response = await fetch (`${process.env.GUITAR_API_URL}/guitarras?populate=image`);
    return await response.json();
}


export async function getProduct(url) {
    const response = await fetch (`${process.env.GUITAR_API_URL}/guitarras?filters[url]=${url}&populate=image`);
    return await response.json();
}

