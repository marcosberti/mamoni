export const theme = {
  colors: {
    gray: {
      100: '#F5f5f5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  styles: {
    global: {
      '&::-webkit-scrollbar': {
        w: '2',
        h: '2',
      },
      '&::-webkit-scrollbar-track': {
        w: '6',
        h: '6',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10',
        bg: 'gray.300',
      },
      'html,body,#__next': {
        height: '100%',
        bg: 'gray.100',
        color: 'gray.800'
      },
      'form > button[type=\'submit\']': {
        mt: 8
      }
    }
  },
  components: {
    Form: {
      baseStyle: {
        container: {
          mb: 4,
        },
      },
    },
    FormLabel: {
      baseStyle: {
        color: 'gray.700',
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            bg: 'inherit',
            border: '1px solid',
            borderColor: 'gray.600',
            _placeholder: {
              opacity: '0.5'
            },
          }
        }
      }
    }
  },
}