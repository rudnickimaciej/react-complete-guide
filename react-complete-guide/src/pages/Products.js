import { Link } from "react-router-dom";

function Producs() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/1"> Product 1</Link>
        </li>
        <li>
          <Link to="/products/1"> Product 1</Link>
        </li>
        <li>
          <Link to="/products/1"> Product 1</Link>
        </li>
      </ul>
    </>
  );
}

export default Producs;
