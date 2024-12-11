export default async function Products({ params } : { params: {id: string }}) {
    const { id } = await params;
    console.log("Inside Products route");
    return (
        <h1>Hey, know more about <b>{id}</b> products</h1>
    )
}