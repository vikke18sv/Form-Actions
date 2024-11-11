import React from "react";
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
const Table = ({ tableData, handleDelete, handleEdit }) => {
  const radius = 7;

  const detail = 2;

  return (
    <div>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={data.id}>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.role}</td>
            <td>
              <button onClick={() => handleEdit(data.id)}>Edit</button>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Canvas>
      <mesh>
        <octahedronGeometry args={[radius, detail]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  </div>
);
};

export default Table;
