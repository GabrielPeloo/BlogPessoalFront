import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
                <a href="https://github.com/GabrielPeloo" target="_blank" className='hover:scale-90'>
                    <GithubLogo size={60}/>
                </a>
                <a  href='https://www.linkedin.com/in/gabriel-luiz-pelo/' target="_blank" className='hover:scale-90'>
                    <LinkedinLogo size={60}/>
                </a>
                <a href="https://www.instagram.com/gabs_pelo/" target="_blank" className='hover:scale-90'>
                    <InstagramLogo size={60}/>
                </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer