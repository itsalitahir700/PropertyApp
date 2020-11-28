import React, { useState } from "react";
import AddProperty from "./AddProperty";
import AddFeature from "./AddFeature";
import { Steps, Button, message } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "Property",
    content: "First-content",
  },
  {
    title: "Features",
    content: "Second-content",
  },
];

function AddListing() {
  const [current, setCurrent] = useState(0);
  const [postsno, setpostsno] = useState("");
  const [postdate, setpostdate] = useState("");

  const handleReturn = (data) => {
    setCurrent(current + 1);
    console.log("response", data.postSno);
    setpostdate(data.postYear);
    setpostsno(data.postSno);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <Steps style={{ padding: "2rem 2rem" }} current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {current === 0 ? (
        <AddProperty handleReturn={handleReturn} />
      ) : (
        <AddFeature postsno={postsno} postdate={postdate} />
      )}
    </div>
  );
}

export default AddListing;
