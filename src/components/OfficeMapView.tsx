import React from "react";
import { IOffice } from "../interfaces/IOffice";

interface OfficeMapViewProps {
  offices: IOffice[];
}

const OfficeMapView: React.FC<OfficeMapViewProps> = ({ offices }) => {
  const defaultWidth = 150;

  return (
    <div
      style={{
        position: "relative",
        width: "600px",
        height: "600px",
        border: "1px solid #ccc",
        backgroundColor: "#eee",
      }}
    >
      {offices.map((office) => (
        <div
          key={office.name}
          onClick={() => alert(`${office.name}`)}
          style={{
            position: "absolute",
            left: `${office.x}px`,
            top: `${office.y}px`,
            width:
              office.orientation === "vertical"
                ? "75px"
                : `${
                    office.scale ? defaultWidth * office.scale : defaultWidth
                  }px`,
            height:
              office.orientation === "vertical"
                ? `${
                    office.scale ? defaultWidth * office.scale : defaultWidth
                  }px`
                : "75px",
            backgroundColor:
              office.type === "workstation"
                ? "#3498db"
                : office.type === "printer"
                ? "#ffcc00"
                : "#aaa",
            outline: "1px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              margin: 0,
              color: office.type === "workstation" ? "white" : "black",
              transform:
                office.orientation === "vertical"
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
            }}
          >
            {office.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OfficeMapView;
