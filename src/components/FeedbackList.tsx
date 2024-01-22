import { TriangleUpIcon } from "@radix-ui/react-icons";
import React from "react";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>ByteGrad</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            neque maxime repellat porro libero illum.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
