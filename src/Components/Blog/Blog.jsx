import blog from "../../assets/Blog/blog.png";
const Blog = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="  mx-auto p-4 pt-6 md:p-6 flex flex-col items-center">
        <p className="font-poppins font-semibold text-[#2AA7FF] text-[16px] leading-[27px] tracking-[0] text-center align-middle">
          Blog & News
        </p>
        <h2 className="font-poppins mb-5 text-[#1B3C74] font-semibold text-[48px] leading-[67px] tracking-[0] text-center align-middle">
          Read Our Latest News
        </h2>
        <div className="flex w-[80%] justify-center gap-5 flex-wrap md:flex-nowrap lg:flex-nowrap">
          <div>
            <div>
              <img src={blog} alt="image" />
            </div>
            <span>Medical</span> <vr />
            <span>March 31, 2022</span>
            <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
            <p>Rebecca Lee</p>
          </div>
          <div>
            <div>
              <img src={blog} alt="image" />
            </div>
            <span>Medical</span> <vr />
            <span>March 31, 2022</span>
            <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
            <p>Rebecca Lee</p>
          </div>
          <div>
            <div>
              <img src={blog} alt="image" />
            </div>
            <span>Medical</span> <vr />
            <span>March 31, 2022</span>
            <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
            <p>Rebecca Lee</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
