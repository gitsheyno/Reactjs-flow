import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import DataGen from "./DataGen";
import CaseSwithData from "./CaseSwithData";
import Predictor from "./Predictor";

// Explanation: Due to time constraints and work commitments (shift starting at 15:00), these additional features couldn't be implemented. Given more time, these enhancements would have been considered.
// Explanation: The current implementation serves as a foundational setup, and further improvements could be made for better code organization, styling, and data handling.

/* Comments and Unimplemented Solutions */

// Unimplemented: For each custom node, create a dedicated component with different props to avoid redundancy and improve reusability.
// Unimplemented: To enhance styling, consider utilizing modular CSS to create distinct scopes for different components or nodes.
// Unimplemented: For client-side data fetching, a fake JSON server setup could simulate data retrieval and manage global node state to dynamically add new nodes.

// Initial setup for edges and nodes
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const initialNodes = [
  {
    id: "1",
    type: "Data Generator",
    position: { x: 0, y: 0 },
    data: { value: "source" },
  },
  {
    id: "2",
    type: "Switch",
    position: { x: 200, y: 0 },
    data: { value: "Manipulate" },
  },
  {
    id: "3",
    type: "Cluster Assigner",
    position: { x: 400, y: 0 },
    data: { value: "Predictor" },
  },
];

// Node type definitions
const nodeTypes = {
  "Data Generator": DataGen,
  Switch: CaseSwithData,
  "Cluster Assigner": Predictor,
};

function Flow() {
  // State hooks for nodes and edges
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  // Callbacks for handling node and edge changes
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // Log initial setup for reference
  console.log(initialNodes, initialEdges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    />
  );
}

export default Flow;
