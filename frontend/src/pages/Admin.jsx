import { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css"; 

function Admin() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/all");
        setUrls(res.data);
      } catch (err) {
        console.error("Error fetching URLs", err);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="container mt-5 admin-container">
      <h2 className="admin-title">📊 Admin Panel</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped table-bordered custom-table mt-3">
          <thead className="table-header">
            <tr>
              <th>#</th>
              <th>Long URL</th>
              <th>Short URL</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url, index) => (
              <tr key={url._id}>
                <td>{index + 1}</td>
                <td>
                  <a href={url.longUrl} target="_blank" rel="noreferrer">
                    {url.longUrl}
                  </a>
                </td>
                <td>
                  <a
                    href={`http://localhost:5000/${url.shortCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`http://localhost:5000/${url.shortCode}`}
                  </a>
                </td>
                <td>{url.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
