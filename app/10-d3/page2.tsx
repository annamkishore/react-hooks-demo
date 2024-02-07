"use client"

import Image from 'next/image';

function MyComponent() {
    return (
        <div style={{backgroundColor: "grey"}}>
            <h1>D3, Typescript, SVG</h1>
            <Image
                src="/assets/box-24.svg" // Path to your image in the public directory
                alt="Example Image"
                width={100} // Desired width of the image
                height={100} // Desired height of the image
            />
        </div>
    );
}

export default MyComponent;
