import _ from "lodash";
import React from "react";
import Proptypes from "prop-types";

const PropFromParent = (props: { items: any; category: any }) => {
  const cader = props.items;
  const caderType = props.category;

  const mapCader = _.map(cader, (c, index) => (
    <React.Fragment key={c.id || index}>
      <li>
        {c.id}={c.name}
      </li>
    </React.Fragment>
  ));

  return (
    <div>
      <h1>{caderType}</h1>
      <ol>{mapCader}</ol>
    </div>
  );
};

PropFromParent.defaultProps = {
    category: "NOT GIVEN",
    items: [],
  };
  
  PropFromParent.propTypes = {
    category: Proptypes.string,
    items: Proptypes.arrayOf(
      Proptypes.shape({ id: Proptypes.number, name: Proptypes.string })
    ),
  };
  

export default PropFromParent;
