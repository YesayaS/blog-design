import React from "react";
import "./toggleSwitch.scss";
import { spawn } from "child_process";

export default function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: any;
}) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </>
  );
}
