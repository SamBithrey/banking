'use client';

import CountUp from 'react-countup';

type Props = { amount: number };

const AnimatedCounter = ({ amount }: Props) => {
  return (
    <div className='w-full'>
      <CountUp
        end={amount}
        prefix='£'
        decimal='.'
        duration={1}
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
