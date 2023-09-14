import {star} from '../assets/icons'

function PopularProductsCard(props) {
    return (
        <div className='flex flex-1 w-full flex-col max-sm:w-full'>
            <img
            className='w-[280px] h-[280px]'
            src={props.imgURL} alt="" />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt="rating" width={24} height={24} />
                <p className='font-montserrat text-xl leading-normal text-slate-gray'>4.5</p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-montserrat font-semibold'>{props.name}</h3>
            <p className='mt-2 font-montserrat font-semibold text-xl text-coral-red leading-normal '>{props.price}</p>
        </div>
    )
}

export default PopularProductsCard
