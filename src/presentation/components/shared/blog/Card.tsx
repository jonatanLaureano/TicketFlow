import React from "react";

interface Article {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
}

const ArticleCard: React.FC<Article> = ({
  imageUrl,
  category,
  date,
  title,
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={imageUrl} alt="Article thumbnail" />
    <div className="px-6 py-4">
      <p className="text-gray-700 text-xs">
        {category} | {date}
      </p>
      <div className="font-bold text-lg">{title}</div>
    </div>
  </div>
);

const ArticleGrid: React.FC = () => {
  const articles: Article[] = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fotos_WOS.pdf/page1-1200px-Fotos_WOS.pdf.jpg",
      category: "ENTRETENIMIENTO",
      date: "30 Agosto, 2023",
      title:
        "Wos | Red Bull Batallas: Recordamos su última presentación en la Batalla de Gallos Red Bull",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fotos_WOS.pdf/page1-1200px-Fotos_WOS.pdf.jpg",
      category: "ENTRETENIMIENTO",
      date: "30 Agosto, 2023",
      title:
        "Wos | Red Bull Batallas: Recordamos su última presentación en la Batalla de Gallos Red Bull",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fotos_WOS.pdf/page1-1200px-Fotos_WOS.pdf.jpg",
      category: "ENTRETENIMIENTO",
      date: "30 Agosto, 2023",
      title:
        "Wos | Red Bull Batallas: Recordamos su última presentación en la Batalla de Gallos Red Bull",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fotos_WOS.pdf/page1-1200px-Fotos_WOS.pdf.jpg",
      category: "ENTRETENIMIENTO",
      date: "30 Agosto, 2023",
      title:
        "Wos | Red Bull Batallas: Recordamos su última presentación en la Batalla de Gallos Red Bull",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
};

export default ArticleGrid;
