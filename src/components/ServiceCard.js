const ServiceCard = (props) => {
  return (
    <div className="bg-sky-200 w-60 flex flex-col justify-between rounded-md shadow-md p-8">
      <img src={props.data.ico} className="ico-service" alt="" />
      <h3 className="font-semibold text-xl mb-2">{props.data.heading}</h3>
      {/* <p>{props.data.content}</p> */}
    </div>
  );
};
export default ServiceCard;
