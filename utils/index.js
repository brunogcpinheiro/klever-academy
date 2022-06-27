export const truncate = (str, length) => {
	if (str.length > length) {
		return str.substring(0, length) + '...'
	}
	return str
}

export const slugify = text => {
	return text
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '')
}
