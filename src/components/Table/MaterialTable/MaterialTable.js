import React from "react";
import MaterialTable from "material-table";
import PropTypes from "prop-types";
function Table(props) {
  console.log(props);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable columns={props.columDef} data={props.data} title="" />
    </div>
  );
}
Table.propTypes = {
  columDef: PropTypes.array,
  data: PropTypes.array
};
export default Table;
