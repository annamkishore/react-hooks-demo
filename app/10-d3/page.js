"use client"

import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { hydrate } from 'react-dom';
import Image from "next/image";

function MyD3Component() {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        const foreignObject = svg.append('foreignObject')
            .attr('x', 50)
            .attr('y', 50)
            .attr('width', "100%")
            .attr('height', "100%");

        const divElement = foreignObject.append('xhtml:div')
            .style('width', '100%')
            .style('height', '100%')
            .style('background-color', 'orange')
            .node();

        hydrate(<DynamicContent />, divElement);
    }, [])

    return (
        <div>
            <h1>D3 with React Component</h1>
            <svg ref={svgRef} width="400" height="250"></svg>
        </div>
    );
}

function DynamicContent() {
    const [dynamicContent, setDynamicContent] = useState("Initial Content");

    return (
        <div>
            <Image
                src="/assets/img.png" // Path to your image in the public directory
                alt="Example Image"
                width={30} // Desired width of the image
                height={30} // Desired height of the image
            />
            <h2>Dynamic Content</h2>
            <p>{dynamicContent}</p>
            <button onClick={() => setDynamicContent("Updated Content")}>Update Content</button>
        </div>
    );
}

export default MyD3Component
