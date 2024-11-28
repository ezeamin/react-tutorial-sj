type Props = {
  image: string;
  title: string;
  text: string;
};

const Card = (props: Props) => {
  const { image, title, text } = props;

  return (
    <article className='max-w-[500px] p-4 border-gray-500 border bg-white rounded-xl'>
      <img src={image} alt={title} className='rounded-lg' />
      <div>
        <h3 className='text-2xl font-bold mt-3'>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
};
export default Card;
