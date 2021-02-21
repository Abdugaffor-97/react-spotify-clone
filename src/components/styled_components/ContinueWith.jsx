import React from "react";

export default function SignUpWithFacebook({ title, className, loginWith }) {
  return (
    <div className="col-12 my-1">
      <a type="button" className={className} href={loginWith}>
        <i className="fab fa-facebook"></i>
        {title}
      </a>
    </div>
  );
}
