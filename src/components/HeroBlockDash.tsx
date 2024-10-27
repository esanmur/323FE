/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from './TwoSidedLayLeft';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography sx={{ color: '#673ab7', fontSize: 'lg', fontWeight: 'lg' }}>
        Be Like A Lope!
      </Typography>
      <Typography
        level="h1"
        sx={{
          fontWeight: 'xl',
          fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
        }}
      >
        Lopes Are Active All Day! 
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: 'lg', lineHeight: 'lg' }}
      >
        Using LopeDay is a good way to stay one schedule and maximize productivity.
        Set your tasks, and LopeDay will help keep you on track all day, every day.
        Sign up with Email and get a special code, that's it! <br /> No Account Neccessary.
      </Typography>
      <Button  color='neutral' size="lg" endDecorator={<ArrowForward sx={{color: '#673ab7', font:"xl"}} />}>
        Sign Up
      </Button>
      <Typography  sx={{ color: '#673ab7'}}>
        Always Be On Time.
      </Typography>
      <Typography
        level="body-xs"
        sx={{
          position: 'absolute',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
      </Typography>
    </TwoSidedLayout>
  );
}