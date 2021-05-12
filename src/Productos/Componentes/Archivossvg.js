import React from "react";
import Modal from "react-bootstrap/Modal";

export default function Archivossvg(props) {

  return (
    <>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d={props.imagen}
                />
              </svg>
    </>
  );
}
