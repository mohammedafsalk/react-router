import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((item) => (
        <Link to={item.id.toString()} key={item.id}>
          <p>{item.title}</p>
          <p>Based On {item.location}</p>
        </Link>
      ))}
    </div>
  );
};

export default Careers;

export const dataLoader = async () => {
  const data = await fetch(" http://localhost:4000/careers");
  return data.json();
};
