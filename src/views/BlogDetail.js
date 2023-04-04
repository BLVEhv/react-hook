import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";
import './Blog.scss';

const BlogDetail = () => {



    const { id } = useParams();
    const navigate = useNavigate();
    const { data: dataBlogDetail, loading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);
    const handleBackData = () => {
        navigate('/blog');
    };
    return (

        <>
            <div>
                <button onClick={() => handleBackData()}>&lt;Back</button>
            </div>
            {dataBlogDetail &&
                <>
                    <div className="detail-container">
                        <div className="detail-title">
                            Blog ID: {id} --- {loading === true ? 'Loading data...' : dataBlogDetail.title}
                        </div>
                        <div className="detail-body">
                            {dataBlogDetail.body}
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default BlogDetail;