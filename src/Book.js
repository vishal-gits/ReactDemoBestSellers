const Book = ({ img, title, author, id }) => {
  return (
    <article className="book">
      <div className="booknum">{id}</div>
      <div className="imgsize">
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );
};
export default Book;
