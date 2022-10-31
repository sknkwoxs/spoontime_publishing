import React from "react";

const IngredientGuideContents = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="IngredientGuideContents">{children}</div>
  ) : null;
};

export default IngredientGuideContents;
