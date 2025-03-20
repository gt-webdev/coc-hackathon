import branding from '../assets/branding.svg'

const Bottom = () => {
    return (
    <section id="bottom" className="flex font-[Roboto] py-10 px-8 bg-[#FFD76C] text-[#003057] justify-center">
       <div className="flex flex-row justify-around w-screen h-full">
        <img src={branding} alt="GT College of Computing logo" className="w-auto h-30"></img>
        <p className="text-lg content-center">Contact: <br /> ramblinhacks@cc.gatech.edu </p>
       </div>
    </section>
    )
}

export default Bottom;