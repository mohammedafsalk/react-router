import { Link, useRouteError } from "react-router-dom";

function DetailsErr() {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back To HomePage</Link>
    </div>
  );
}

export default DetailsErr;
