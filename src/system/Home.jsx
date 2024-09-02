import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getFineractData = async () => {
    try {
      const response = await axios.get("https://demo.mifos.io/fineract-provider/api/v1/groups?paged=true");
      setGroups(response.data.pageItems);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
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
            <p>Loading...</p>
          ) : error ? (
            <p>Error fetching data: {error.message}</p>
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Active</td>
                    <td>Office ID</td>
                    <td>Office Name</td>
                    <td>Hierarchy</td>
                    <td>Group Level</td>
                    <td>Status</td>
                    <td>Submitted Date</td>
                    <td>Submitted By</td>
                    <td>Activated Date</td>
                    <td>Activated By</td>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group) => (
                    <tr key={group.id}>
                      <td>{group.id}</td>
                      <td>{group.name}</td>
                      <td>{group.active ? "Yes" : "No"}</td>
                      <td>{group.officeId}</td>
                      <td>{group.officeName}</td>
                      <td>{group.hierarchy}</td>
                      <td>{group.groupLevel}</td>
                      <td>{group.status.value}</td>
                      <td>{group.timeline?.submittedOnDate?.join('-') || "N/A"}</td>
                      <td>{group.timeline?.submittedByUsername || "N/A"}</td>
                      <td>{group.timeline?.activatedOnDate?.join('-') || "N/A"}</td>
                      <td>{group.timeline?.activatedByUsername || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
