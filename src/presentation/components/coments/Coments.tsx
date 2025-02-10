import { TypographyH2 } from "../shared/typography";
import { FaFilter } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { coments, answers } from "@/config/const";
import { useState } from "react";

function Coments() {
  const [visible, setVisible] = useState(4);
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [answer, setAnswer] = useState<Record<number, boolean>>({});
  const [visibleAnswers, setVisibleAnswers] = useState<Record<number, boolean>>(
    {}
  );
  const [likedAnswers, setLikedAnswers] = useState<Record<number, boolean>>({});

  const handleLike = (id: number) => {
    setLiked((prevLiked) => ({ ...prevLiked, [id]: !prevLiked[id] }));
  };

  const handleLikeAnswer = (id: number) => {
    setLikedAnswers((prevLiked) => ({ ...prevLiked, [id]: !prevLiked[id] }));
  };

  const handleAnswer = (id: number) => {
    setAnswer((prevAnswer) => {
      const newState = !prevAnswer[id];
      setVisibleAnswers((prev) => ({ ...prev, [id]: false }));
      return { ...prevAnswer, [id]: newState };
    });
  };

  const handleSeeAnswers = (id: number) => {
    setVisibleAnswers((prev) => {
      const newState = !prev[id];
      setAnswer((prevAnswer) => ({ ...prevAnswer, [id]: false }));
      return { ...prev, [id]: newState };
    });
  };

  const handleClick = () => {
    if (!expanded) {
      setExpanded(true);
      setVisible((prev) => Math.min(prev + 4, coments.length));
    } else {
      setExpanded(false);
      setVisible(4);
    }
  };

  return (
    <div className="bg-[#1C1C1E] w-[95%] mx-auto my-5 px-16 pt-10 mb-20 mt-10">
      <TypographyH2 className="text-white text-2xl font-bold font-nunito mb-5">
        COMENTARIOS
      </TypographyH2>
      <p className="flex mb-8 justify-end items-center font-nunito text-white cursor-pointer">
        Filtrar
        <FaFilter
          className="flex mt-1 ml-2 text-xl"
          onClick={() => console.log("filter")}
        />
      </p>
      <div className="w-full space-y-5">
        {coments.slice(0, visible).map((e) => (
          <div key={e.id} className="flex flex-col space-y-5">
            <div className="flex space-x-5">
              <Avatar>
                <AvatarImage src={e.imageAvatar} />
              </Avatar>
              <div className="flex flex-col space-y-2 flex-grow">
                <span className="text-yellow-500 font-nunito">
                  {e.userName}
                </span>
                <p className="text-white font-nunito">{e.comment}</p>
                <div className="flex text-white text-sm space-x-5">
                  <span
                    className="flex items-center text-2xl space-x-1 cursor-pointer"
                    onClick={() => handleLike(e.id)}
                  >
                    {liked[e.id] ? <IoMdHeart /> : <IoMdHeartEmpty />}
                    <p className="text-xs">Me gusta</p>
                  </span>
                  <span
                    className="flex items-center text-2xl space-x-3 cursor-pointer"
                    onClick={() => handleAnswer(e.id)}
                  >
                    <FaRegCommentDots />
                    <p className="text-xs">Responder</p>
                  </span>
                  <span
                    className="flex items-center text-2xl space-x-3 cursor-pointer"
                    onClick={() => handleSeeAnswers(e.id)}
                  >
                    <FaComments />
                    <p className="text-xs">Respuestas</p>
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="flex pt-10 text-white w-60 justify-center">
                  {e.date}
                </span>
                <span className="flex text-white text-2xl">
                  <HiOutlineDotsVertical />
                </span>
              </div>
            </div>
            {/* Caja para responder */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                answer[e.id] ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              {answer[e.id] && (
                <div className="w-[72%] ml-20">
                  <textarea
                    id="comment"
                    className="bg-gray-100 text-gray-700 p-3 rounded w-full placeholder-gray-400"
                    placeholder="Escribe tu comentario aquí..."
                    rows={2}
                  />
                  <Button className="bg-[#5D2994] text-white mt-5 mb-10 py-5 px-10 rounded text-lg hover:bg-[#624393] transition duration-500">
                    Responder
                  </Button>
                </div>
              )}
            </div>
            {/* Respuestas */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                visibleAnswers[e.id] ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-5 w-full">
                {answers
                  .filter((ans) => ans.replyId === e.id)
                  .map((ans) => (
                    <div key={ans.id} className="flex space-x-5 ml-16">
                      <Avatar>
                        <AvatarImage src={ans.imageAvatar} />
                      </Avatar>
                      <div className="flex flex-col space-y-2 flex-grow">
                        <span className="text-yellow-500 font-nunito">
                          {ans.userName}
                        </span>
                        <p className="text-white font-nunito">{ans.comment}</p>
                        <div className="flex text-white text-sm space-x-5">
                          <span
                            className="flex items-center text-2xl space-x-1 cursor-pointer"
                            onClick={() => handleLikeAnswer(ans.id)}
                          >
                            {likedAnswers[ans.id] ? (
                              <IoMdHeart />
                            ) : (
                              <IoMdHeartEmpty />
                            )}
                            <p className="text-xs">Me gusta</p>
                          </span>
                          <span className="flex items-center text-2xl space-x-3">
                            <FaRegCommentDots />
                            <p className="text-xs">Responder</p>
                          </span>
                          <span className="flex items-center text-2xl space-x-3">
                            <FaComments />
                            <p className="text-xs">Respuestas</p>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex pt-10 text-white w-60 justify-center">
                          {ans.date}
                        </span>
                        <span className="flex text-white text-2xl">
                          <HiOutlineDotsVertical />
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Button
          onClick={handleClick}
          className="bg-[#5D2994] text-white py-5 sm:w-[50%] md:w-[20%] rounded text-sm hover:bg-[#624393] transition duration-500"
        >
          Cargar más comentarios
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <textarea
          id="comment"
          className="bg-gray-100 text-gray-700 p-3 rounded w-full placeholder-gray-400"
          placeholder="Escribe tu comentario aquí..."
          rows={4}
        />
      </div>
      <Button className="bg-[#5D2994] text-white mt-5 mb-10 py-5 px-10 rounded text-sm hover:bg-[#624393] transition duration-500">
        Comentar
      </Button>
    </div>
  );
}

export default Coments;
