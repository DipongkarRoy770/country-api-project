

const SingleCountry = ({ country }) => {
    const { name, population, flags, region } = country
    console.log(country)
    return (

        <div
            className="block rounded-lg bg-slate-400 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div
               >
                <img
                    className="rounded w-80 "
                    src={flags.png}
                    alt="" />
                {/* <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a> */}
            </div>
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {name.common}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    Region :{region}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">Population : {population}</p>
                <button
                    type="button"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Button
                </button>
            </div>
        </div>
    );
};

export default SingleCountry;