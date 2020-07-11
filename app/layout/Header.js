import Link from 'next/link';

export default () => (
    <div>
        <img></img>
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/files">
                <a>Files</a>
            </Link>
            <Link href="/upload">
                <a>Upload</a>
            </Link>
        </div>
    </div>
);
