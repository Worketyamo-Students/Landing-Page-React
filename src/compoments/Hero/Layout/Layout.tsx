import IMG from '/connexion/image-connexion.png'

const bgImage = {
  backgroundImage: `url(${IMG})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%'
  
}

function Layout() {
  return (
    <div style={bgImage} className="hidden md:block max-w-screen-md w-full"></div>
  )
}

export default Layout