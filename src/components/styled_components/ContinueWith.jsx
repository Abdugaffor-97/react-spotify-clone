import React from "react";

export default function SignUpWithFacebook({
  title,
  className,
  loginWith,
  icon,
}) {
  return (
    <div className={className}>
      {icon}
      <a href={loginWith}>{title}</a>
    </div>
  );
}
