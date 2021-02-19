import React from "react";

export default function SignUpWithFacebook({ title, className }) {
  return (
    <div className="col-12 my-1">
      <a
        type="button"
        className={className}
        href="https://www.facebook.com/v7.0/dialog/oauth?client_id=174829003346&state=AQAAbXBjN5CxEfrurE%2FRXCjdPCibN2RCnJ7tM%2BTQmSrXFZbSA0T4d0S6u19Q9btEvbqj9eLr7p67AMEKnW9BdYwB1ICGhij1dPnUu7xXqviGLBvk1wNHIKquFE8eIhTRH%2FrAz%2B7ps8Uef7DXXVFcj10rjOb60BByYUkkGProad8w8fV9CCr0asnJ1zLtr9KhdNm8PeU1M9fSTv800z3nnTKpbtJ7SgWr%2BUyah2%2BDGkZs0HYaAkAqhUnpGpWZtCHEYtg%3D&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Ffacebook%2Fredirect"
      >
        <i className="fab fa-facebook"></i>
        {title}
      </a>
    </div>
  );
}
