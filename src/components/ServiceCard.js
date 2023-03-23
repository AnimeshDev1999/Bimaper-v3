const ServiceCard = (props) => {
  return (
    <div className="bg-white rounded-md shadow-md p-8">
      <img src={props.data.ico} className="ico-service" alt="" />
      <h3 className="font-semibold text-xl mb-2">{props.data.heading}</h3>
      {/* <p>{props.data.content}</p> */}
    </div>
  );
};
export default ServiceCard;
