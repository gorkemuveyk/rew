import SearchItem from "./SearchItem";
import PropType from 'prop-types'

const SearchList = ({ product }) => {
    console.log(product, "a");
    return (
        <div className="bg-orange-500 z-30 absolute top-14 p-2 w-full max-h-96 overflow-auto search-list">
            {
                product.map((p) => (
                    <SearchItem key={p.id} product={p} />
                ))
            }
        </div>
    );
};

export default SearchList;

SearchList.propTypes = {
    product: PropType.any
}