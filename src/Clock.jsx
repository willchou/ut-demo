import React, {useEffect, useState} from 'react';

const Clock = () => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(Date.now());
    }, 1800);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <div>
      timestamp is {now}
    </div>
  );
}

export default Clock;
