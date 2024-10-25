import "./photo.css";
export default function ShowPhoto({ photo }) {
  console.log(photo);

  const { UserId, id, title } = photo;
  return (
    <div className="box">
      <div>
        <h2>ID: {id}</h2>
        <h4> Title : {title}</h4>
      </div>
    </div>
  );
}
