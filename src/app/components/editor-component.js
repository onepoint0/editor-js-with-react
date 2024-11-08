'use client'
// https://dev.to/sumankalia/how-to-integrate-editorjs-in-reactjs-2l6l
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import SimpleImage from './simple-image';
import MyBlockTune from "./my-block-tune";

const DEFAULT_INITIAL_DATA = {
  "time": new Date().getTime(),
  "blocks": [
    {
      "type": "header",
      "data": {
        "text": "editor",
        "level": 1
      }
    },
  ]
}

const EditorComponent = () => {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
      tools: {
        header: Header,
        image: SimpleImage,
        // paragraph: {
        //   // tunes: ["MyBlockTune"]
        //   class: "claretest"
        // },
        // MyBlockTune
      },
    });
  };

  // This will run only once
  useEffect(() => {
    console.log('in use effect ',ejInstance.current);
    if (ejInstance.current === undefined) {
      console.log('init editor');
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return <><div id='editorjs'></div></>;
}

export default EditorComponent;