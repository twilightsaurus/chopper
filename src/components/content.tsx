import { Telegram, X } from '@mui/icons-material';
import meme from '../assets/meme4.jpg';
import './content.css';

export const Content = () => {
  return (
    <section className='content'>
      <div className='content-row main-row'>
        <div className='row-section'>
          <div className='socials'>
            {/* <a
              target='_blank'
              href='https://raydium.io/swap/?outputCurrency=4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr'
            >
              <div className='link-button'>Buy</div>
            </a> */}
            <a
              target='_blank'
              className='link-icon tg'
              href='https://t.me/argumentonsol'
            >
              <Telegram
                sx={{ width: '50px', height: '50px' /*, marginLeft: '2em'*/ }}
                color='primary'
              />
            </a>
            <a
              target='_blank'
              className='link-icon x'
              href='https://x.com/argumentonsol'
            >
              <X
                sx={{ width: '50px', height: '50px', marginLeft: '2em' }}
                color='primary'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='content-row main-row'>
        <div className='row-section'>
          <img src={meme} />
        </div>
      </div>
      <div className='content-row'>
        <p className='footer'>
          Launched fairly on <a href='https://pump.fun'> pump.fun</a>!
        </p>
        {/* <a
          color='primary'
          underline='hover'
          sx={{ fontSize: '1.5em' }}
          href='https://dexscreener.com/solana/4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr'
        >
          <p className='ca'>4NVypRS1MoBAWTDUXUjgXzmP29tBXM91tK1XcSrZtoPr</p>
        </a> */}
      </div>
    </section>
  );
};
