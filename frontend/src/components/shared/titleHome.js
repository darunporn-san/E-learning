const TitleHome = ({ title, description }) => {
  return (
    <div className="has-text-centered mb-6">
      <h2 className="title is-2">{title}</h2>
      <p className="subtitle is-4 has-text-grey">{description}</p>
    </div>
  );
};
export default TitleHome;
