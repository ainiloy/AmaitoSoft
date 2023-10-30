import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { BsChevronDown } from 'react-icons/bs';

function Toggle(props) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="secrvice-toggle-wrapper">
      <div
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? (
          <div className={isExpanded ? "d-flex toggle-title toggle-active" : "d-flex toggle-title"} >
            <h4>{props.department}</h4>
            <div><BsChevronDown/></div>
          </div>
        ) : (
          <div className="d-flex toggle-title" >
            <h4>{props.department}</h4>
            <div><BsChevronDown/></div>
          </div>
        )}
      </div>
      <section {...getCollapseProps()}>
        <div>
          <p>{props.serviceDetails}</p>
        </div>
      </section>
    </div>
  );
}
export default Toggle;