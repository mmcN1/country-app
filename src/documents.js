import { gql } from 'graphql-request'

const countriesDocument = gql`
  {
    countries {
      code
      currency
      emoji
      languages {
        name
        code
      }
      name
      native
      phone
      continent {
        name
      }
    }
  }
`

export default countriesDocument