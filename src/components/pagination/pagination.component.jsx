import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Stack';


const PaginationRounded = (props) => {
  const { 
    numberOfPaginationBtns,
    handlePageChange
  } = props;
  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center' }}>
        <Stack 
            spacing={2} 
            sx={{ marginTop: '100px', color: 'info.main' }}
        >
            <Pagination 
                count={numberOfPaginationBtns} 
                variant="outlined" 
                shape="rounded" 
                size="large"
                onChange={handlePageChange}
                sx= {{ border: '10px' }}
            />
        </Stack>
    </Box>
  );
};

export default PaginationRounded;