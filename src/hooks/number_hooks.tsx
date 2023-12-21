export const formatPhoneNumber = (input: string | number): string => {
	if (!input) {
		return ''
	}

	// Remove all non-digit characters
	var digits = input.toString().replace(/\D/g, '')

	// Check if the input has at least 10 digits
	if (digits.length < 10) {
		return 'Invalid phone number'
	}

	// Extract the country code if available
	let countryCode = '+1' // Default country code
	if (digits.length > 10) {
		countryCode = `+${digits.slice(0, digits.length - 10)}`
		digits = digits.slice(digits.length - 10)
	}

	// Format the phone number
	const formattedNumber = `${countryCode} (${digits.slice(0, 3)}) ${digits.slice(
		3,
		6
	)}-${digits.slice(6)}`
	return formattedNumber
}

export function phoneNumberToNumeric(input: string | number): number {
	if (!input) {
		return NaN
	}

	// Remove all non-digit characters
	const digits = input.toString().replace(/\D/g, '')

	// If no country code is provided, default to +1
	let numericValue
	if (digits.length <= 10) {
		numericValue = parseInt(`1${digits}`, 10)
	} else {
		numericValue = parseInt(digits, 10)
	}

	return numericValue
}
