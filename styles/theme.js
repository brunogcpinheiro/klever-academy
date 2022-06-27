import { extendTheme } from '@chakra-ui/react'

const colors = {
	brand: {
		background: '#0B0B1E',
		primary: '#aa33b5',
		secondary: '#222345',
		accent: '#3F3F6C',
	},
	white: '#ffffff',
	black: '#000000',
	gray: {
		50: '#F0F2F4',
		100: '#D6DAE1',
		200: '#BBC2CD',
		300: '#A1ABBA',
		400: '#8693A7',
		500: '#6C7B93',
		600: '#566376',
		700: '#414A58',
		800: '#2B313B',
		900: '#16191D',
	},
}

const fonts = {
	body: 'Montserrat, system-ui, sans-serif',
	heading: 'Montserrat, sans-serif',
}

const styles = {
	global: props => {
		return {
			'html, body': {
				backgroundColor: colors.gray[50],
				fontSize: 'md',
			},
		}
	},
}

const components = {
	Link: {
		baseStyle: {
			_focus: {
				boxShadow: 'none',
			},
		},
	},
}

export const theme = extendTheme({ colors, fonts, styles, components })
