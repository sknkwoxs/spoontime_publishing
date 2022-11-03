import React from "react";

const BookmarkContents = ({ id, activeTab, children }) => {
  return activeTab === id ? (
    <div className="BookmarkContents">{children}</div>
  ) : null;
};

export default BookmarkContents;
