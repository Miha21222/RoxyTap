

const Scorebar = (props) => {


    return (
        <>
            <div className="flex fixed top-0 left-0 w-screen bg-black justify-between p-3 text-white shadow-xl items-center border-b-4 border-purple-700 border-dashed">
                <p className="text-xl press-start-2p-regular text-left tracking-widest">YOUR SCORE:</p>
                <p className="text-2xl press-start-2p-regular2 tracking-widest">{props.newScore}</p>
            </div>
        </>
    );
};

export default Scorebar;