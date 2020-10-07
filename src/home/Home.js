import React from 'react';
import { Link } from 'react-router-dom';
import './Home.sass';

export default function Home() {
    return (
        <div className='home-view container'>
            <div className='row text-center'>
                <p className='appIntro'>
                    Implement the following functionality and submit your response.
                </p>
            </div>
            <div className='questions'>
                <div className='question'>
                    <Link className='btn' to='/question-1'>
                        Javascript iToA
                    </Link>
                </div>
                <div className='question'>
                    <Link className='btn' to='/question-2'>
                        Javascript Matrix Unwind
                    </Link>
                </div>
                <div className='question'>
                    <Link className='btn' to='/question-3'>
                        Node Client
                    </Link>
                </div>
            </div>
        </div>
    );
}
