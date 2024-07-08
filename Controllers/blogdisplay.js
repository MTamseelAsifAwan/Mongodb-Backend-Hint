import { Blog } from "../Models/blog.js";

const getBlogcontoller={
    async getBlogs(req,res){
        try{
            const blogs=await Blog.find();
            res.status(200).json(blogs);
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    }
}
export default getBlogcontoller;
// export const getBlogs = async (req, res) => {
//     try {
//         const blogs = await Blog.find(); // Fetch all blog data
//         res.status(200).json(blogs);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
