"use client"

import React, {useEffect, useState} from 'react';
import treeData from './treemenu-data.json'
import {Tree} from "antd";

// -----------------
// React Component
// -----------------
export default function TreeDemo() {
  const [antdTreeData, setAntdTreeData] = useState(null)

  useEffect(() => {
    console.log("convert once on component mount")
    let antdSupportedTreeData = transformJson(treeData)
    setAntdTreeData(antdSupportedTreeData)
    console.log(antdSupportedTreeData)
  }, [])

  return <>
    <h1>ReactJS Tree Demo</h1>
    <Tree
      checkable
      checkStrictly
      treeData={antdTreeData}
    />
  </>
}

// -----------------
// Utility Functions
// -----------------

// label, nodes => title, children (bcoz antd tree knows title, children)
function antdReviver(key, value) {
  switch (key) {
    case "label":
      this.title = value
      break
    case "nodes":
      this.children = value
      break
    default:
      return value
  }
}

function transformJson(sourceTreeData) {
  let targetTreeData = JSON.parse(JSON.stringify(sourceTreeData), antdReviver)
  return targetTreeData
}
