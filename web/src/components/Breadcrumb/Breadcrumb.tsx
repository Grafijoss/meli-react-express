import './styles.scss'

const Breadcrumb = ({ categories }: { categories: Array<string>}) => {
  return (
    <div className='breadcrumb'>
      {categories.map((cat) => (
        <span className='breadcrumb__item' key={cat}>
          {cat}
        </span>
      ))}
    </div>
  )
}

export default Breadcrumb
