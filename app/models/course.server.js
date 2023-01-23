export async function getCourse() {
    const course = await fetch(`${process.env.GUITAR_API_URL}/course?populate=image`)
    return await course.json()
}