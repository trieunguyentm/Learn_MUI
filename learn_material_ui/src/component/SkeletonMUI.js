import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SkeletonMUI = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);

    return (
        <div>
            {
                isLoading ?
                    (
                        <div>
                            <Skeleton variant="rectangular" width={300} height={200} />
                            <Skeleton variant="text" width={200} height={30} />
                            <Skeleton variant="text" width={250} height={20} />
                        </div>
                    )
                    :
                    (
                        <div>
                            <h1 style={{ width: 300, height: 200 }}>Title</h1>
                            <h1>Actual Title</h1>
                            <p>Actual Description</p>
                        </div>
                    )
            }
        </div>
    );
}

export default SkeletonMUI;
