export default function QueryDataStatus(queryData) {
	return !queryData.isLoading || queryData.data !== undefined
}
