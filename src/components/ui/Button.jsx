import { Link } from "react-router-dom";
export default function Button({ name, url }) {
  return (
    <div>
      <Link to={url}>
        <button type="button">Go to {name}</button>
      </Link>
    </div>
  );
}
