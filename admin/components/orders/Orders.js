import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Total</th>
          <th scope="col">Paid</th>
          <th scope="col">Date</th>
          <th>Status</th>
          <th scope="col" className="text-end">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>ceramic white vase </b>
          </td>
          <td>user@example.com</td>
          <td>₹1,100</td>
          <td>
            <span className="badge rounded-pill alert-success">
              Paid At Today 10:13 AM
            </span>
          </td>
          <td>May 12 2024</td>
          <td>
            <span className="badge btn-success">Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/admin/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>
        {/* Not paid Not delivered */}
        <tr>
          <td>
            <b>ceramic white vase</b>
          </td>
          <td>user@example.com</td>
          <td>₹1,100</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>May 12 2024</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/admin/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Orders;
