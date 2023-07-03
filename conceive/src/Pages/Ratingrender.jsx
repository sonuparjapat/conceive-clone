
import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
export default function Ratingrender({ rating, numReviews }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                
                  key={i}
                  style={{ marginLeft: '1' }}
                  color= 'yellow'
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf   key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar  key={i} style={{ marginLeft: '1' }} />;
          })}
       
        
      </Box>
    );
  }