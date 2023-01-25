import './style.scss';

export default function Stock(props) {
    return(
        <section className='product-list'>
            {[...props.children]}
        </section>
    );
}