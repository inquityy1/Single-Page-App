import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import useScript from "../useScript/useScript";

export default function FourthPage() {
  // const id = uuidv4();

  const [loading, setLoading] = useState(true);

  // useScript("https://cdn.yourbow.com/cozi/gptyb.js");

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <>
      {!loading ? (
        <div>
          <div>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <div
            id="adRightRailTop"
            className="adyb show-ad-label"
            data-ad-mapping="rightrailtop"
            data-ad-slot="test_marko/HP"
            data-ad-targetingpos=""
          ></div>
        </div>
      ) : (
        <h1>Wait a minute please -_-</h1>
      )}
    </>
  );
}
