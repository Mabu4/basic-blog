interface property {
  id: string;
}

const DetailviewComponent = ({ id }: property) => {
  return <div>Da is a {id}</div>;
};

export default DetailviewComponent;
