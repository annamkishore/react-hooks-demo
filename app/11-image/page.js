import Image from 'next/image';

function MyComponent() {
    return (
        <div>
            <h1>Image Example</h1>
            <Image
                src="/assets/img.png" // Path to your image in the public directory
                alt="Example Image"
                width={100} // Desired width of the image
                height={100} // Desired height of the image
            />
        </div>
    );
}

export default MyComponent;
