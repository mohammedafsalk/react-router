import { useLoaderData, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const data = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for:{data.title}</h2>
      <p>Starting Salary:{data.salary}</p>
      <p>Location:{data.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
}

export default Details;

export const getDetails = async ({ params }) => {
  const { id } = params;
  const data = await fetch(`  http://localhost:4000/careers/${id}`);
  if (!data.ok) {
    throw Error("Requested Page Cant Be Fetched ");
  }
  return data.json();
};
