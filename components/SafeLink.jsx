/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

const SafeLink = ({href, children}) => (
  <Link href={href}>
    {children}
  </Link>
)

export default SafeLink