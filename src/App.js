import React, { useState } from "react";

const NAVY = "#0a1f44";
const ORANGE = "#ff7a00";
const WHITE = "#ffffff";

const LABEL = {
  display: "block",
  fontSize: 12,
  marginBottom: 4
};

const INP = {
  width: "100%",
  padding: 6,
  borderRadius: 4,
  border: "1px solid #ccc"
};

const btnOrange = {
  background: ORANGE,
  color: WHITE,
  border: "none",
  padding: "8px 12px",
  borderRadius: 4,
  cursor: "pointer"
};

const btnRed = {
  background: "red",
  color: "#fff",
  border: "none",
  padding: "6px 10px",
  borderRadius: 4,
  cursor: "pointer"
};

const cardStyle = {
  background: "#fff",
  padding: 20,
  borderRadius: 8,
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  maxWidth: 1000,
  margin: "20px auto"
};

function App() {
  const [routes, setRoutes] = useState([]);

  const addRoute = () => {
    setRoutes([
      ...routes,
      { from: "", to: "", km: "", days: "", rate: "" }
    ]);
  };

  const updateRoute = (index, key, value) => {
    const updated = [...routes];
    updated[index][key] = value;
    setRoutes(updated);
  };

  const deleteRoute = (index) => {
    const updated = routes.filter((_, i) => i !== index);
    setRoutes(updated);
  };

  const submit = () => {
    console.log("Routes:", routes);
    alert("Data submitted successfully!");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Admin Panel</h2>

      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <h3 style={{ color: NAVY, margin: 0 }}>🗺️ Freight Routes</h3>

          <button onClick={addRoute} style={btnOrange}>
            + Add Route
          </button>
        </div>

        {routes.length === 0 && (
          <p style={{ textAlign: "center", color: "#777" }}>
            No routes added yet
          </p>
        )}

        {routes.map((route, index) => (
          <div
            key={index}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr) auto",
              gap: 10,
              alignItems: "end",
              marginBottom: 14,
              background: "#f9f9fc",
              padding: 16,
              borderRadius: 8,
              border: "1px solid #e8e8f0"
            }}
          >
            <div>
              <label style={LABEL}>From</label>
              <input
                style={INP}
                value={route.from}
                onChange={(e) =>
                  updateRoute(index, "from", e.target.value)
                }
              />
            </div>

            <div>
              <label style={LABEL}>To</label>
              <input
                style={INP}
                value={route.to}
                onChange={(e) =>
                  updateRoute(index, "to", e.target.value)
                }
              />
            </div>

            <div>
              <label style={LABEL}>Distance (km)</label>
              <input
                style={INP}
                value={route.km}
                onChange={(e) =>
                  updateRoute(index, "km", e.target.value)
                }
              />
            </div>

            <div>
              <label style={LABEL}>Transit (days)</label>
              <input
                style={INP}
                value={route.days}
                onChange={(e) =>
                  updateRoute(index, "days", e.target.value)
                }
              />
            </div>

            <div>
              <label style={LABEL}>Rate/kg</label>
              <input
                style={INP}
                value={route.rate}
                onChange={(e) =>
                  updateRoute(index, "rate", e.target.value)
                }
              />
            </div>

            <button
              onClick={() => deleteRoute(index)}
              style={btnRed}
            >
              🗑
            </button>
          </div>
        ))}

        <button
          onClick={submit}
          style={{
            width: "100%",
            marginTop: 20,
            background: NAVY,
            color: WHITE,
            border: "none",
            padding: 14,
            fontSize: 16,
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;
