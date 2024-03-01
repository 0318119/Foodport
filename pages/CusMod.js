
import React from 'react'
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { selectResturant } from '.././components/features/ResSlice';

const CusMod = ({ obj }) => {
    console.log(obj);
    const router = useRouter();
    const dispatch = useDispatch();
    const openResturant = () => {
        let payload = obj
        dispatch(selectResturant(payload));
        router.push('/resbox', obj)
    }
    function handleClickedd() {
        router.push({ pathname: "/addFood", state: obj });

    }
    console.log('rehman', obj)

    return (
        <div className='col-lg-12 mt-5 res_item_shadow'>
            <div className='res_box_item'>
                <img src={obj?.data().image} alt="" onClick={openResturant} />
                <div className='rating_box'>
                    <h6 className='box_item_head_one'>{obj?.data().resName}</h6>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <br />
                    <span className='box_text mt-1'>
                        <i className="fas fa-exclamation-circle item_icon"></i>
                        <p>{obj?.data().address}</p>
                    </span>
                    <span className='box_text mt-1'>
                        <i className="fas fa-fire-alt"></i>
                        <p className='overFlow_pra'>{obj?.data().About}</p>
                    </span>
                    <span className='box_text mt-2 pb-3'>
                        <i className="far fa-comment-alt"></i>
                        <p className='overFlow_pra'>{obj?.data().About}</p>
                    </span>
                    <span className='box_text mt-4'>
                        <i className="fas fa-check"></i>
                        <p>Deliver</p>

                        <i className="fas fa-check ml-5"></i>
                        <p>Takeout</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CusMod;
