import React from "react";

const FilterContents = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="FilterContents">{children}</div>
  ) : null;
};

export default FilterContents;
