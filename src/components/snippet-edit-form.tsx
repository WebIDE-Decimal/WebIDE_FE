"use client";
import { Editor } from "@monaco-editor/react";

export default function SnippetEditForm() {
  return (
    <div>
      <Editor
        height="50vh"
        theme="vs-dark"
        language="javascript"
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}
