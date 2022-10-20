/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

const SafeLink = ({href, children}) => (
  <Link href={href}>
    <a>
      {children}
    </a>
  </Link>
)

export default SafeLink