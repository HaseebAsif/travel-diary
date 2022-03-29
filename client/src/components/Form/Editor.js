import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = () => {
  return (
    <>
      <Editor style={{ border: "1px solid black"}} placeholder="Start Writing Your Travel Diary from here ... " />
    </>
  );
};
export default EditorComponent;
