interface SVGProps {
  fill: string;
  height?: number;
  width?: number;
}

type Item = {
  condition: string
  free_shipping: boolean
  id: string
  picture: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  title: string
}
