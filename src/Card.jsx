import Image from "../src/gitHub.jpg";

function Card() {
  return (
    <div className=" ml-28 mt-5 inline-block dark:text-white  dark:bg-gray-800 dark:border-gray-700">
      <div className="inline p-5 pr-6">
        <img src={Image} alt="Image" className="h-52 w-50" />
        <h3>Rajesh Moharan</h3>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  );
}
export default Card;
