/* Graciously borrowed from https://codepen.io/gpmetheny/details/YYeRQy */
import React from "react";
import "./LoadingIndicator.css";

const LoadingIndicator = () => (
  <div id="loading">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="rocksGlass"
      viewBox="-8.233 -8.233 122.466 122.466"
      height="300px"
    >
      <path
        d=" M 12.556 103 L 3 3 L 103 3 L 93.347 103 L 12.556 103 L 12.556 103 Z "
        fill="rgb(255,255,255)"
        vectorEffect="non-scaling-stroke"
        strokeWidth="5.616"
        stroke="rgb(70,70,70)"
        strokeLinejoin="miter"
        strokeLinecap="butt"
        strokeMiterlimit="4"
      />
      <g opacity="0.8">
        <path
          d=" M 12.251 56.089 L 93.751 56.089 L 88.851 98.111 L 17.351 98.111 L 12.251 56.089 Z "
          fill="rgb(147,72,3)"
        />
      </g>
      <g id="iceLeft" style={{ opacity: 0.6 }}>
        <path
          d=" M 46.751 81.733 L 27.662 84.671 L 16.662 65.618 L 35.751 62.68 L 46.751 81.733 Z "
          fill="rgb(187,222,251)"
        />
        <path
          d=" M 46.751 81.733 L 58.839 66.671 L 47.839 47.618 L 35.751 62.68 L 46.751 81.733 Z "
          fill="rgb(33,150,243)"
        />
        <path
          d=" M 16.662 65.618 L 28.751 50.556 L 47.839 47.618 L 35.751 62.68 L 16.662 65.618 Z "
          fill="rgb(144,202,249)"
        />
      </g>
      <g id="iceRight" style={{ opacity: 0.6 }}>
        <path
          d=" M 61.218 92.7 L 45.643 81.28 L 51.337 60.03 L 66.912 71.45 L 61.218 92.7 Z "
          fill="rgb(187,222,251)"
        />
        <path
          d=" M 61.218 92.7 L 80.416 90.598 L 86.11 69.347 L 66.912 71.45 L 61.218 92.7 Z "
          fill="rgb(33,150,243)"
        />
        <path
          d=" M 51.337 60.03 L 70.535 57.927 L 86.11 69.347 L 66.912 71.45 L 51.337 60.03 Z "
          fill="rgb(144,202,249)"
        />
      </g>
      <g opacity="0.5">
        <path
          d=" M 89.776 14.76 C 88.039 14.687 86.398 15.71 86.301 17.098 L 86.012 21.188 C 85.915 22.576 87.266 23.745 89.1 23.818 L 89.293 23.818 C 91.031 23.818 92.479 22.795 92.575 21.408 L 92.865 17.317 C 93.058 16.002 91.707 14.833 89.776 14.76 L 89.776 14.76 Z  M 88.714 29.077 C 86.88 29.004 85.336 30.027 85.239 31.415 L 80.703 91.24 L 23.56 91.24 C 21.726 91.24 20.181 92.335 20.181 93.796 C 20.181 95.257 21.629 96.353 23.56 96.353 L 83.888 96.353 C 85.625 96.353 87.073 95.33 87.17 93.942 L 91.9 31.707 C 91.996 30.392 90.548 29.15 88.714 29.077 L 88.714 29.077 Z "
          fillRule="evenodd"
          fill="rgb(162,162,162)"
        />
      </g>
    </svg>
  </div>
);

export default LoadingIndicator;
