import profile from '../../assets/images/profile.png'
const Header = () => {
   return (
      <header className='flex items-center justify-between py-4 border-b-2 container mx-auto'>
         <h1 className='text-3xl '>Knowledge Cafe</h1>
         <img src={profile} alt="profile"/>
      </header>
   );
};

export default Header;