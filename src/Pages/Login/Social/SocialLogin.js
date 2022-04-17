import React from 'react';
import google from '../../../Images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
            </div>
            <div>
                <button className='btn btn-info text-white fw-bold w-50 d-block mx-auto'>
                    <img style={{width:'30px'}} src={google} alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;