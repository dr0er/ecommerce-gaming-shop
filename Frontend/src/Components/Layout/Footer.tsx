export const Footer = () => {
  return (
    <>
      <div className={'h-px bg-gray-300 mt-16'} />
      <footer className={'p-8 flex flex-col gap-4'}>
        <h2 className="font-bold text-lg">Stragan</h2>
        <ul>
          <li>About us</li>
          <li>Cookies</li>
          <li>Privacy policy</li>
          <li>Some shit</li>
        </ul>
        <h2 className="font-bold text-lg">Social media</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <h2 className="font-bold text-lg">Contact</h2>
      </footer>
    </>
  )
}
