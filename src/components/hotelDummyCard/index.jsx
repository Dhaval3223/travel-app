import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import StarRating from '../starRating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckIcon from '@mui/icons-material/Check';
import RoomIcon from '@mui/icons-material/Room';
import Button from '@mui/material/Button';

export default function MediaControlCard(props) {
  const { item } = props || {};
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box  sx={{ display: 'flex', alignItems: 'center'}}>
          <Typography component="div" variant="h5" sx={{ marginRight: '10px' }}>
            {item?.hotel}
          </Typography>
          <StarRating totalStars={5} />
        </Box>
        <Box>
          <FavoriteBorderIcon />
        </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
          <RoomIcon />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item?.city}
          </Typography>
        </Box>
        </CardContent>
        <CardContent sx={{ flex: '1 0 auto' }}> 
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {item.line1}
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {item.line2}
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon sx={{ color: 'green', marginRight: '5px' }} />
              <Typography variant="subtitle1" color="text.secondary" component="div">
              {item.line3}
            </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button variant="contained">Check Rooms</Button>
          </Box>
        </Box>
        </CardContent>
        </Box>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image="/hotel.jpeg"
        alt="Live from space album cover"
      />
    </Card>
  );
}
