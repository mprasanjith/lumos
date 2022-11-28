import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const MapChart = ({ people, setTooltipContent }) => {
  return (
    <div data-tip="">
      <ComposableMap>
        <ZoomableGroup
          minZoom={75}
          maxZoom={125}
          zoom={100}
          center={[14.8059, 56.879]}
        >
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "none",
                      outline: "none",
                    },
                    pressed: {
                      fill: "none",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {people.map((person) => (
            <a
              key={person.id}
              href={`/dashboard/reports/patient?id=${person.id}`}
            >
              <Marker
                onMouseEnter={() => {
                  setTooltipContent(person.title);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                coordinates={[person.coordinate.lng, person.coordinate.lat]}
              >
                <circle r={0.05} fill="#F53" />
              </Marker>
            </a>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
