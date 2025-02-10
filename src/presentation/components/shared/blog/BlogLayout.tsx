import ArticleGrid from "./Card";
import Card2 from "./Card2";
import EventCardGrid from "./RecentCard";
import TendenciaLayout from "./Tendencia";
import BlogTitle from "./Tittle";

const BlogLayout = () => {
  return (
    <div>
      <BlogTitle title="TENDENCIA" />
      <div className="my-6">
        <TendenciaLayout />
      </div>

      <BlogTitle  title="RESEÑAS"/>

      <div className="mx-20">
        <EventCardGrid />
      </div>
      <div className="mx-28">
        <ArticleGrid />
      </div>

      <BlogTitle  title="RECIENTES"/>

      <div className="grid grid-cols-4 grid-rows-2 gap-12 mx-20 ">
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
        <Card2
          title="Freestyle Master Series"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit.   "
          imageUrl="https://elcomercio.pe/resizer/Bg1HhHZtnJaHPgVCJ9c1Y36cu5o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OMUZ2Q225NDCPAXMHQJRFT76IY.jpg"
        />
      </div>
      <BlogTitle title="ENTRETENIMIENTO" />

      <div className="mx-20">
        <EventCardGrid />
      </div>
      <div className="mx-28">
        <ArticleGrid />
      </div>

      <BlogTitle title="VIDEOS"/>
      <div className="grid grid-cols-3 gap-4 mx-28 my-10">
        <iframe
          className="w-80 h-40 "
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <iframe
          className="w-80 h-40 "
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
        <iframe
          className="w-80 h-40 "
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
};

export default BlogLayout;
