import React, { useState } from "react";
import { useEffect } from "react";

import "./routes-css/home.css"

function Home({userInstance}) {
  let [email, setEmail] = useState('');
  let [fileList, setFileList] = useState([]);
  useEffect(()=>{
    userInstance.get('userProfile').on((data)=>setEmail(data.emailProp));
    userInstance.get('fileNamesObject').map().on((key)=>{
      console.log(`${key}`);
      userInstance.get('fileObjectList').get(`${key}`).on(dataObj => setFileList(oldList => [...oldList, {filename: dataObj.filenameProperty, cid: dataObj.CID_prop}]));
    });

/*     userInstance.get('document0.docx').on(dataObj=>{
      console.log(dataObj.CID_prop);
    }); */
  }, []);
  return (
    <div className="home-container">
      <h1>Home:</h1>
      <br></br>
      <h3>
        My Documents:
      </h3>
      <p>NOTE: Metadata of each file is transmitted across GUN peers, so you may see duplicates of the same file listed below.</p>
      <br></br>
        <table className="table-container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content Identifier (CID)</th>
            </tr>
          </thead>
          <tbody>
              {fileList.map(elem =>
              <tr>
                <td>{elem.filename}</td>
                <td>{elem.cid}</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  );
}

export default Home;
