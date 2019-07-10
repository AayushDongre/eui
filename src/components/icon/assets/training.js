import React from 'react';

const EuiIconTraining = props => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <g fill="#000" fillRule="nonzero">
      <path d="M1 11V1h11v2.5a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h5a.5.5 0 1 0 0-1H1z" />
      <path d="M16 14v1.5a.5.5 0 1 1-1 0V14c0-1.724-1.276-3-3-3-.91 0-1.298-.02-1.805-.122-1.25-.254-2.333-1-3.585-2.566a.5.5 0 1 1 .78-.624c.9 1.124 1.653 1.74 2.434 2.043a2.5 2.5 0 1 1 3.86.616C15.075 10.961 16 12.332 16 14zm-2.5-5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
      <path d="M9 15.5V14c0-.851.134-1.357.721-2.007a.5.5 0 0 0-.742-.67C8.194 12.191 8 12.923 8 14v1.5a.5.5 0 1 0 1 0zM5.958 5.772L3.89 3.188a.5.5 0 1 0-.78.624l2.067 2.585a.5.5 0 1 0 .781-.625z" />
    </g>
  </svg>
);

export const icon = EuiIconTraining;
