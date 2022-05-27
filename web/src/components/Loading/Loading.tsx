import './styles.scss'

const Loading = ({ testName }: {testName: string}) => {
  return (
    <div className='loading' data-testid={testName}>
      <div className='animation'>
        Cargando
      </div>
    </div>
  )
}

export default Loading
