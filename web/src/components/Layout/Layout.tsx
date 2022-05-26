import './styles.scss'

interface Props {
  children: JSX.Element | String;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className='layout-container'>
        {children}
      </main>
    </>
  )
}

export default Layout
