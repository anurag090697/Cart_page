/** @format */

function Product(props) {
  let dec = props.dec;

  return (
    <div className='itemDiv flex gap-4 items-center justify-start w-fit'>
      <img src={props.mob.image} alt='' className='w-28' />
      <div className='min-w-80'>
        <h2 className='font-medium text-2xl'>{props.mob.model}</h2>
        <p className='text-gray-700'> $ {props.mob.price}</p>
        <button
          className='text-blue-600 cursor-pointer'
          onClick={() => props.rem(props.idx)}
        >
          Remove
        </button>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <button
          className='font-black text-2xl rotate-180 text-blue-600 hover:text-blue-800'
          onClick={() => props.inc(props.idx)}
        >
          v
        </button>
        <p>{props.mob.quantity}</p>
        <button
          className='font-black text-2xl text-blue-600 hover:text-blue-800'
          onClick={() => props.dec(props.idx)}
        >
          v
        </button>
      </div>
    </div>
  );
}

export default Product;
