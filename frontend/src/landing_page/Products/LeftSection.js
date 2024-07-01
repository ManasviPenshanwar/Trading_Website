import React from 'react';

const LeftSection = ({
  imageURL,
  productName,
  productDescription, // fixed typo
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} /> {/* added alt attribute */}
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p> {/* fixed typo */}
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/google-Play-Badge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img
                src="media/appstore-Badge.svg"
                style={{ marginLeft: "50px" }}
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
