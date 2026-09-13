import { use, useState } from "react";

const TechnologyList = ({ stackListPromise }) => {
  const stackListData = use(stackListPromise);
  console.log(stackListData);
  

  return (
    <>
      <h1>Technology List</h1>
    </>
  );
};

export default TechnologyList;
