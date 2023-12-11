import { Handle, Position } from "reactflow";
import "./data-generation.css";
function DataGen(props) {
  return (
    <div className="data-gen-node" key={props.id}>
      <Handle type="target" position={Position.Right} />

      <div className="content">
        <div>
          <p htmlFor="dataInput">{props.type}</p>
        </div>
        <div className="circle-container">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle active"></span>
        </div>
        <p className="value">{props.data.value}</p>
      </div>
    </div>
  );
}

export default DataGen;
