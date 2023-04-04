import useFetch from "../customize/fetch";
import './Blog.scss';
import { NavLink } from "react-router-dom";
import BlogDetail from "./BlogDetail";

const Blog = () => {
    const { data: dataBlog, loading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
    let newData;
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 12);
    }

    return (
        <>
            <div className="add-new-btn">
                <button>
                    <NavLink to={`/add-new-blog`}>Add new blog</NavLink>

                </button>
            </div>

            <div className="blog-container">
                {newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="blog-content" key={item.id}>
                            <div className="blog-title">{item.title}</div>
                            <div className="blog-body">{item.body}</div>
                            <button>
                                <NavLink to={`/blog/${item.id}`}>View detail</NavLink>
                            </button>
                        </div>
                    );
                })}
                {loading === true &&
                    <tr>
                        <td colSpan={5} style={{ textAlign: "center !important", with: '100' }}>Loading...</td>
                    </tr>}
            </div >
        </>
    );
};

export default Blog;
