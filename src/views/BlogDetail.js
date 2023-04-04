import { useParams } from "react-router-dom";


const BlogDetail = () => {
    const { id } = useParams();
    return (

        <h1>{id}</h1>
    );
};

export default BlogDetail;