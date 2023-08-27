import { Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';

const Progress = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }

    return (
        <div>
            <Button
                variant='contained'
                color='primary'
                disabled={isLoading}
                onClick={handleClick}
            >
                {
                    isLoading ?
                        (
                            <CircularProgress size={20} color='primary' />
                        ) :
                        (
                            'Load'
                        )
                }
            </Button>
        </div>
    );
}

export default Progress;
