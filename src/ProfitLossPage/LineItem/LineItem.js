import React from "react";
import { Link } from "react-router-dom";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";

function LineItem(props) {
  const getLink = () => {
    return props.category === "direct labor"
      ? `/schedule/`
      : `form/line-item/${props.id}`;
  };

  return (
    <Link className="fieldset__item-container" to={getLink()}>
      <p className="fieldset__item-text">{CapitalizeAllWords(props.name)}</p>
      <p className="fieldset__item-text">{props.amount.toLocaleString()}</p>
    </Link>
  );
}

export default LineItem;
