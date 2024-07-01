import React from 'react';

const Universe = () => {
  const imageStyle = {
    width: 'auto',
    height: '100px',
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain', // Ensures the image fits without stretching
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/smallcase-logo.png" alt="smallcase" style={imageStyle} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/streak-logo.png" alt="streak" style={imageStyle} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/sensibull-logo.svg" alt="sensibull" style={imageStyle} />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/zerodhafundhouse.png" alt="zerodha fund house" style={imageStyle} />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/tijori.svg" alt="tijori" style={imageStyle} />
          <p className="text-small text-muted">Fundamental research platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 text-center">
          <img src="media/ditto-logo.png" alt="ditto" style={imageStyle} />
          <p className="text-small text-muted">Insurance</p>
        </div>
      </div>
      <div className="text-center">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Universe;
