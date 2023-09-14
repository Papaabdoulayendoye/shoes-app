import Button from "../components/Button"
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
function SuperQuality() {
    return (
    <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
        <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You{" "}
            <span className="text-coral-red">Super</span>{" "} 
            <span className="text-coral-red">Quality</span> Shoes 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus illum necessitatibus qui eveniet illo nemo dignissimos nostrum totam, quaerat ullam sit nesciunt blanditiis, animi, voluptate officia. Sit nemo accusamus quod.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas provident numquam aliquid odio voluptatibus!
        </p>
        
        <div className="mt-11 ">
            <Button label={"View Details"} iconUrl={arrowRight} />
        </div>
        
        </div>
        
        <div className="flex flex-1 justify-center items-center">
            <img src={shoe8} alt="shoe8" width={570} height={522} />
        </div>
    </section>
    );
}

export default SuperQuality;
