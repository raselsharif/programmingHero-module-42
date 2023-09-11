import Profile from '../../images/profile.png'

function Header() {
    return (
        <header className='md:flex justify-between py-4 container mx-auto border-b-2'>
            <h1 className='text-3xl'>Knowlege Cafe</h1>
            <img src={Profile} alt="profile image" />

        </header>
    );
}

export default Header;