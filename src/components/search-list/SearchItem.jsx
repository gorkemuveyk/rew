import PropType from 'prop-types'
import { Link } from 'react-router-dom'

const SearchItem = ({ product }) => {
    return (
        <Link to={`/product-detail/${product.id}`} onClick={() => document.querySelector('.search-list').classList.add('hidden')} className="text-black w-full bg-white p-2 rounded flex justify-between items-center my-2">
            <h3 className='text-lg'>{product.name}</h3>
            <p>${product.price}</p>
        </Link>
    )
}

export default SearchItem

SearchItem.propTypes = {
    product: PropType.any
}