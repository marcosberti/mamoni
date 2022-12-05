import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <Grid templateColumns={{ base: '1fr', lg: '80px auto' }} templateRows='150px auto' h='100vh' color='gray.600'>
      <GridItem rowSpan={2} colSpan={1} display={{ base: 'none', lg: 'revert'}}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} />
      <GridItem rowSpan={1} colSpan={1} overflow='hidden' px={16} pb={16} overflowY='auto' >
        {children}
      </GridItem>
    </Grid>
  )
}

export default Layout