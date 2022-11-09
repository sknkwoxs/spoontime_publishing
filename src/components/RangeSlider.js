import React from "react";
import { Range } from "react-range";

export default function RangeSlider({ min, max, step, price, onChnage }) {
  const [values, setValues] = React.useState([100]);

  return (
    <>
      <p className="mb-2 Font16sb">얼마나 먹었나요?</p>
      <div className="mb-6 Font14">
        <input
          className="px-3 py-2 mx-1 border rounded border-GreyScale-grey04 w-14"
          type="text"
          value={values || ""}
          readOnly
        />
        g
      </div>
      <Range
        step={10}
        min={0}
        max={200}
        values={values}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-1 my-4 bg-gray-200 rounded-md mb-[3.25rem]"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="w-5 h-5 transform translate-x-10 rounded-full bg-BrandColor-green01 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-BrandColor-green01"
          >
            <p className="absolute mt-6 Font12sb text-GreyScale-grey01">
              {values[0]}
            </p>
          </div>
        )}
      />
    </>
  );
}
