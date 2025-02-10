
interface BlogTitleProps {
  title: string;
}

const BlogTitle = ({ title }: BlogTitleProps) => {
  return (
    <div>
      <div className="flex items-center justify-center my-4">
        <div className="flex items-center justify-center w-full max-w-2xl">
          <div className="h-px bg-purple-400 flex-grow"></div>
          <div className="bg-purple-500 text-white text-3xl font-extrabold py-2 px-4 rounded-md mx-4">
            {title}
          </div>
          <div className="h-px bg-purple-400 flex-grow"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;