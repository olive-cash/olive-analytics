import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import PlaceHolder from '../../assets/placeholder.png'
import EthereumLogo from '../../assets/eth.png'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <Image {...rest} alt={''} src={PlaceHolder} size={size} />
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={EthereumLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px',
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  const tokenString = isAddress(address).toLowerCase()
  var path = `https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/${isAddress(
    address
  )}/logo.png`

  if (tokenString === '0xE1C8f3d529BEa8E3fA1FAC5B416335a2f998EE1C'.toLowerCase()) {
    path =
      'https://raw.githubusercontent.com/elkfinance/bridge-tokens/main/avalanche-tokens/0xE1C8f3d529BEa8E3fA1FAC5B416335a2f998EE1C/logo.png'
  }
  if (tokenString === '0xD606199557c8Ab6F4Cc70bD03FaCc96ca576f142'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/gdl.png'
  }
  if (tokenString === '0xDcEA074715F990fB4a1737e7A8aD33dF804A88F1'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/mkc.png'
  }
  if (tokenString === '0x2841A8a2ce98A9d21aD8C3B7Fc481527569bd7bb'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/sl3.png'
  }
  if (tokenString === '0x65378b697853568dA9ff8EaB60C13E1Ee9f4a654'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/husky.png'
  }
  if (tokenString === '0x3711c397B6c8F7173391361e27e67d72F252cAad'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/com.png'
  }
  if (tokenString === '0x008e26068b3eb40b443d3ea88c1ff99b789c10f7'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/zero.png'
  }
  if (tokenString === '0x95d16B76A4F29dBdb2D9Ea2c4D0a31e2a1D830B3'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/akbash.png'
  }
  if (tokenString === '0xD9702F5E3b0eb7452967CB82529776D672bdC03F'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/neko.png'
  }
  if (tokenString === '0x78ea17559B3D2CF85a7F9C2C704eda119Db5E6dE'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/ave.png'
  }
  if (tokenString === '0xcf98695af7eacd36e036dedb6e192c1c9c7e66d6'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/snowleopard.png'
  }
  if (tokenString === '0x61eCd63e42C27415696e10864d70ecEA4aA11289'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/rugpull.png'
  }
  if (tokenString === '0x1CcCA1cE62c62F7Be95d4A67722a8fDbed6EEcb4'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/laika.png'
  }
  if (tokenString === '0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd'.toLowerCase()) {
    path = 'https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/logos/0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd/logo.png'
  }
  if (tokenString === '0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/0x59414b3089ce2AF0010e7523Dea7E2b35d776ec7.png'
  }
  if (tokenString === '0x4735721ED62713E3A141C939f4Aa55cA8aD5F66A'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/0x4735721ED62713E3A141C939f4Aa55cA8aD5F66A.png'
  }
  if (tokenString === '0xDd453dBD253fA4E5e745047d93667Ce9DA93bbCF'.toLowerCase()) {
    path = 'https://zabu.finance/logo.png'
  }
  if (tokenString === '0x999c891262ce01f1c1afd1d46260e4c1e508b243'.toLowerCase()) {
    path = 'https://raw.githubusercontent.com/pangolindex/tokens/main/assets/0x999c891262ce01f1C1AFD1D46260E4c1E508B243/logo.png'
  }
  // new AB tokens
  if (tokenString === '0xc7198437980c041c805A1EDcbA50c1Ce5db95118'.toLowerCase()) {
    path = 'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xde3A24028580884448a5397872046a019649b084/logo.png'
  }
  if (tokenString === '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70'.toLowerCase()) {
    path = 'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a/logo.png'
  }
  if (tokenString === '0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98'.toLowerCase()) {
    path = 'https://raw.githubusercontent.com/ava-labs/bridge-tokens/main/avalanche-tokens/0xaEb044650278731Ef3DC244692AB9F64C78FfaEA/logo.png'
  }
  if (tokenString === '0xaB2712b217F0015B602C06E4fb66B8cf8B04F894'.toLowerCase()) {
    path = 'https://avax.olive.cash/images/tokens/0xaB2712b217F0015B602C06E4fb66B8cf8B04F894.png'
  }
  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={(event) => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
