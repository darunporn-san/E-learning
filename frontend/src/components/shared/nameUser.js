const NameUser = ({ user }) => {
  return (
    <div className="media">
      <div className="media-left">
        <div
          className="testimonial-avatar"
          style={{ background: user.gradient }}
        >
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
      </div>
      <div className="media-content">
        <p className="title is-6">{user.name}</p>
        <p className="subtitle is-7 has-text-grey">{user.role}</p>
      </div>
    </div>
  );
};
export default NameUser;
