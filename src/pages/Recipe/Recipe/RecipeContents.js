import React from "react";

const RecipeContents = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="RecipeContents">{children}</div>
  ) : null;
};

export default RecipeContents;
