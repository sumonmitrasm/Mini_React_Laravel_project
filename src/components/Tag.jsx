import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Tag = () => {
    const { id, slug } = useParams();
    const [tagDetails, setTagDetails] = useState(null);
    const [blogsDetails, setBlogsDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTagDetails = async () => {
            try {
                const response = await fetch(`api/tag/${id}/${slug}`);
                const data = await response.json();
                setTagDetails(data.blogstags);
                setBlogsDetails(data.blogsDetails.data); // Adjust based on pagination
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the tag details:', error);
                setLoading(false);
            }
        };

        fetchTagDetails();
    }, [id, slug]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!tagDetails) {
        return <p>No data found.</p>;
    }

    return (
        <div>
            <h1>{tagDetails.title}</h1>
            <p>{tagDetails.description}</p>
            <meta name="description" content={tagDetails.meta_description} />
            <meta name="robots" content={tagDetails.meta_robot} />
            <meta property="og:image" content={tagDetails.meta_image} />

            <div className="blog-posts">
                {blogsDetails.map((blog) => (
                    <div key={blog.id} className="post">
                        <h2>{blog.title}</h2>
                        <p>{blog.summary}</p>
                        <a href={`/blogs/${blog.id}`}>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tag;
