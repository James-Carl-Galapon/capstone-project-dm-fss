import React from "react";
import './routes-css/add-document.css';


function AddDocument({userInstance}) {
  return (
    <div className="top-container">
      <div className="upload-container">
        <div className="title-container">
          <h3>Upload Document</h3>
        </div>
        <form className="flex-upload-container" >
          <div className="flex-item1">
            <label>Upload File(s): </label>
            <input type="file" className="upload-btn-class"></input>
          </div>
          <div className="flex-item2">
            <label>Choose Where to Pin Data:</label>
            <div className="checkbox-container">
              <input type="checkbox" name="web3storage" value="web3storage"/>
              <label for="web3storage"> Web3Storage</label><br/>
              <input type="checkbox" name="vehicle2" value="Car"/>
              <label for="vehicle2"> My own IPFS node</label><br/>
            </div>
          </div>
          <div className="flex-item-last">
            <button type="submit" className="submit-btn">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDocument;
