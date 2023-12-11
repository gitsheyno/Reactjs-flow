import { Handle, Position } from "reactflow";

import "./case-switch.css";
function CaseSwithData(props) {
  return (
    <div className="data-gen-node" key={props.id}>
      <Handle type="target" position={Position.Right} />
      <Handle type="target" position={Position.Left} />

      <div className="content">
        <div>
          <p htmlFor="dataInput">{props.type}</p>
        </div>
        <div className="circle-container">
          <span className="circlee"></span>
          <span className="circlee active"></span>
          <span className="circlee"></span>
        </div>
        <p className="value">{props.data.value}</p>
      </div>
    </div>
  );
}

export default CaseSwithData;
