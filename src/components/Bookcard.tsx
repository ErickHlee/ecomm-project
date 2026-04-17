import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const Bookcard: React.FC<BookCardProps> = (props: BookCardProps) => {
  return (
    <div className="p-4 rounded">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-32 object-cover mb-2"
        />
        <h2 className="font-bold">{props.title}</h2>
        <p>{props.price}</p>
      </Link>
    </div>
  );
};

export default Bookcard;
