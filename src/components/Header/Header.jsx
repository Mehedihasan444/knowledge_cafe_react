import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
       <header className='my-10'>
         <div className="flex justify-between items-center mb-5">
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img className=" w-10" src={profile} alt="" />
        </div>
        <hr className=' border-1 ' />
       </header>
    );
};

export default Header;