import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";
import items from "./data";

const Home = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getFineractData = async () => {
    try {
      const response = await axios.get(
        "/fineract-provider/api/v1/groups?paged=true"
      );
      setGroups(response.data.pageItems || items);
    } catch (error) {
      setError(error);
      setGroups(items); // Set fallback data on error
    } finally {
      setLoading(false); // Ensure loading is set to false after either success or failure
    }
  };

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (!isAuthenticated || isAuthenticated === "false") {
      navigate("/");
    } else {
      getFineractData();
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };

  return (
    <div className="home">
      <nav className="nav">
        <p>APACHE FINERACT TESTING DASHBOARD</p>
      </nav>
      <div className="custom-dashboard">
        <div className="table-wrapper">
          {loading ? (
            <div className="loading-spinner">Loading...</div>
          ) : error ? (
            <div className="error-message">Error fetching data: {error.message}</div>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Active</th>
                    <th>Office ID</th>
                    <th>Office Name</th>
                    <th>Hierarchy</th>
                    <th>Group Level</th>
                    <th>Status</th>
                    <th>Submitted Date</th>
                    <th>Submitted By</th>
                    <th>Activated Date</th>
                    <th>Activated By</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group) => (
                    <tr key={group.id}>
                      <td>{group.id}</td>
                      <td>{group.name}</td>
                      <td>{group.active ? "Yes" : "No"}</td>
                      <td>{group.officeId || "N/A"}</td>
                      <td>{group.officeName || "N/A"}</td>
                      <td>{group.hierarchy || "N/A"}</td>
                      <td>{group.groupLevel || "N/A"}</td>
                      <td>{group.status?.value || "N/A"}</td>
                      <td>
                        {group.timeline?.submittedOnDate?.join("-") || "N/A"}
                      </td>
                      <td>{group.timeline?.submittedByUsername || "N/A"}</td>
                      <td>
                        {group.timeline?.activatedOnDate?.join("-") || "N/A"}
                      </td>
                      <td>{group.timeline?.activatedByUsername || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
