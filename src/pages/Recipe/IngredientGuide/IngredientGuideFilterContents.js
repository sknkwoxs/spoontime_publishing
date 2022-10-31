import React from "react";

const IngredientGuideFilterContents = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="IngredientGuideFilterContents">{children}</div>
  ) : null;
};

export default IngredientGuideFilterContents;
