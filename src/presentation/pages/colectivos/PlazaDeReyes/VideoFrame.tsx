interface VideoFrameProps {
  routeImg: string;
  title: string;
  date: string;
  place: string;
  onClick: () => void;
  isSelected: boolean;
}

function VideoFrame({
  title,
  date,
  place,
  onClick,
  isSelected,
}: VideoFrameProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-colors duration-150 w-[100%] p-[0.5rem] flex flex-row gap-[1rem] 
        ${isSelected ? "bg-violet-900" : "bg-violet-600"} hover:bg-violet-800`}
    >
      <img
        className="w-[10rem]"
        src="https://img.redbull.com/images/c_crop,x_231,y_0,h_1296,w_972/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2022/5/18/puifihps3ughyv2r9m9n/plaza-de-reyes"
        alt={title}
      />
      <div className="flex flex-col gap-[1rem] justify-center">
        <h4 className="text-white text-[1.1em] font-bold">{title}</h4>
        <span className="text-white text-[0.9em]">{date}</span>
        <span className="text-[#eeba0b] text-[0.9em]">{place}</span>
      </div>
    </div>
  );
}

export default VideoFrame;
