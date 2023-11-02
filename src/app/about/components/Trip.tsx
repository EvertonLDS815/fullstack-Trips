import { prisma } from "@/lib/prisma";


async function getStrips() {
    const trips = await prisma.trip.findMany({});
    return trips
}
async function Trips() {
    const data = await fetch("http://jsonplaceholder.typicode.com/posts").then((res) => res.json());

    console.log({data});
    return (
        <div>{data.map( (i: any) => (
            <p key={i.id}>{i.title}</p>
        )
        )}</div>
    )
}

export default Trips