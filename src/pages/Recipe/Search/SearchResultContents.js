import React from "react";

const SearchResultContents = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="SearchResultContents">{children}</div>
  ) : null;
};

export default SearchResultContents;
