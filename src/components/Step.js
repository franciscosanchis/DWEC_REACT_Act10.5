import React, { useEffect, useState } from "react";

const Step = ({ items }) => {
  const [activeStep, setActiveStep] = useState(null);
  const [hour, setHour] = useState(new Date().getHours());

  const getHour = () => {
    if (hour !== new Date().getHours()) return setHour(new Date().getHours());
  };

  const isCurrentStep = () => {
    getHour();
    items.forEach((item) => {
      if (hour >= item.start && hour < item.end)
        return setActiveStep(item.index);
    });
  };

  const getStatus = (index) => {
    if (index < activeStep) return "completed";
    else if (index > activeStep) return "disabled";
    else return "active";
  };

  useEffect(() => {
    const intervalId = setInterval(isCurrentStep, 500);
  });

  const renderResults = items.map((item) => {
    console.log(activeStep);
    return (
      <React.Fragment key={item.index}>
        <div className={`${getStatus(item.index)} step`}>
          <i className={`${item.iconName} icon`}></i>
          <div className="content">
            <div className="title">{item.title}</div>
            <div className="description">{item.text}</div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div>{renderResults}</div>;
};

export default Step;
